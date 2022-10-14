const express = require("express");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const DataSchema = require("../modeles/Data")
const { body, validationResult } = require('express-validator');
const { findById } = require("../modeles/Data");
// const notes = require("./notes");
const { json } = require("express");
const Notes = require("../modeles/Notes");
const Data = require("../modeles/Data");
// Get all the notes using GET
router.get('/fetchalldata/:id', fetchuser, async (req, res) =>{

try{ 
        const notes = await Data.find({notes: req.params.id});
                res.send(notes);
                //res.send('Hello World!')            
        } catch (error) {
                console.error(error.message);
                res.status(500).send("Some Error occurred")
        }
})
//Save all notes
router.post('/adddata/:id', fetchuser, [
        // body('title', "please enter a valid title").isNumeric(),
        // body('titleLess', "please enter a valid titleLess").isNumeric(),
], async (req, res, ) => {
       // let note = await Data.findById(req.params.id);
       
        try { 
                const { title, titleLess, remark } = req.body;
               // let notes = await Notes.find( { id } = req.body );
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                }
               

                const data = await new Data({
                        title,titleLess,remark,   notes: req.params.id
                })
                const saveNote = await data.save();
                res.json(saveNote);
         } catch (error) {
                console.error(error.message);
                res.status(500).send("Some Error occurred")
        }
})
// Update notes
router.put('/updatedata/:id', fetchuser,
        async (req, res) => {
                try {
                const { title } = req.body;
                // create a new note object
                const newNote = {};
                if (title) { newNote.title = title };
                // Find the note to be updated
                let note = await Data.findById(req.params.id);
                if (!note) { return res.status(404).send("Not Found") }

                if (note.user.toString() !== req.user.id) {
                        return res.status(401).send("Not Allowed")
                }
                note = await Data.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
                res.json({ note })
        } catch (error) {
                console.error(error.message);
                res.status(500).send("Some Error occurred")          
        }
        })
        // Delete notes
        router.delete('/deletedata/:id', fetchuser,
        async (req, res) => {
                
                try {
                // Find the note to be updated
                let note = await Data.findById(req.params.id);
                //  if (!note) { return res.status(404).send("Not Found") }
                // // Allow deletion only if user owen Notes        
                // if (note.user.toString() !== req.user.id) {
                //         return res.status(401).send("Not Allowed")
                // }
                note = await Data.findByIdAndDelete(req.params.id)
                res.json({"Success":"Note has been deleted", note:note})
        } catch (error) {
                console.error(error.message);
                res.status(500).send("Some Error occurred")          
        }
        })


        
module.exports = router