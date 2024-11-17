const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const basePath = '/calculator';
const CalcController = require('../controllers/calculator');

router.post(basePath, asyncHandler(async(req, res) => {
    if (!req.body.operation) {
        return res.status(400).send({
            message: "operation attribute is required.",
        });
    }
    const result = await CalcController.get(req.body.operation);
    if (result.error) {
        return res.status(400).json(result)
    }
    res.status(200).json({ result })
}));

module.exports = {
    router
};