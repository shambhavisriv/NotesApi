module.exports = function(app){
    var services = require('../controllers/note.controller');

    app.post('/notes', services.create);
}