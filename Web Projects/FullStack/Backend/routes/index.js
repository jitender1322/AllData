const express = require("express");
const routes = express.Router();
const admin = require("../model/adminSchema")

routes.get("/api/users", async (req, res) => {
    let data = await admin.find({});
    res.json(data);
})
routes.post('/api/users', async (req, res) => {
    const newUser = await admin.create(req.body);
    res.json(newUser);
});
routes.delete('/api/deleteUser', async (req, res) => {
    console.log(req.query);
    const newUser = await admin.findByIdAndDelete(req.query.id);
    res.json(newUser);
});

module.exports = routes;