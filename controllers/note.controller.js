var notes = require('../models/notes.models');

exports.create = function(req , res) {
    if(!req.body.content)
    {
        res.status(400).send({message : "Content can't be empty"});
    }

    var note = new notes({
        title : req.body.title || "Untitled Note",
        content : req.body.content || "No Content"
    })
    
}