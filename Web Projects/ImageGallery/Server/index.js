const express = require("express")
const port = 1008
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const db = require("./config/db")
const admin = require("./config/dbSchema")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage, limits: 5 * 1024 * 1024 }).single("image")

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(cors({ origin: "http://localhost:5173" }))

app.get("/", async (req, res) => {
    let data = await admin.find({});
    data && res.json(data);
})

app.post("/addImage", upload, async (req, res) => {
    if (!req.file) {
        res.json("Image not found")
    }
    let image = req.file.path.replace(/\\/g, "/")
    let data = await admin.create({ image })
    data && res.json("data added")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port : " + port);
})