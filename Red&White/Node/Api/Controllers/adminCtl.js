const admin = require("../models/adminSchema")
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jsonwebtoken")

module.exports.addAdmin = async (req, res) => {
    let user = await admin.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ msg: "user already existed" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    req.body.image = req.file.path

    let data = await admin.create(req.body);
    data ? res.status(200).json({ msg: "admin added succesfully" }) : res.status(400).json({ msg: "admin not added" })
}

module.exports.logAdmin = async (req, res) => {
    let user = await admin.findOne({ email: req.body.email });
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            let token = jwt.sign({ userData: user }, "node", { expiresIn: "1h" });
            res.status(200).json({ msg: "login succesfully", token: token })
        } else {
            res.status(505).json({ msg: "password not match" })
        }
    } else {
        res.status(505).json({ msg: "user not found" })
    }
}

module.exports.viewAdmin = async (req, res) => {
    let data = await admin.find({});
    res.status(200).json({ adminData: data });
}