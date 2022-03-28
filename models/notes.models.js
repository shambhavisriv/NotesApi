var mongoose = require('mongoose');

var note = mongoose.Schema({
    title : String,
    content : String , 

},
{
    timestamps : true
});

module.exports  = mongoose.model('notes', note);