const express = require('express');
const router = express.Router();
// const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Detail = require('../models/Detail');

// Add new notes using: post "/api/auth/addnote" . login required
router.post('/newdetails', [
    body('name', 'Enter Valid Name').isLength({ min: 3 }),
    body('email', 'Enter valid email adress').isEmail(),
    body('number', 'Enter Valid number').isLength({ min: 10 }),
    body('subject', 'subject must be atleast min 5 characters').isLength({ min: 3 }),
    body('message', 'message must be atleast min 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {

        const { name, email, number, subject, message } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const details = new Detail({
            name, email, number, subject, message 
        })
        const saveDetail = await details.save();
        res.json(saveDetail);
       

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

module.exports = router;