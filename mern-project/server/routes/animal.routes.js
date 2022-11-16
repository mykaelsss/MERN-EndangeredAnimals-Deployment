const EndangeredAnimalController = require('../controllers/animal.controller')

module.exports = function(app){
    app.get('/api/animal', EndangeredAnimalController.readAll)
    app.get('/api/pet/one/:id', EndangeredAnimalController.readOne)
    app.post('/api/animal', EndangeredAnimalController.create)
    app.put('/api/animal/:id', EndangeredAnimalController.update)
    app.delete('/api/animal/:id', EndangeredAnimalController.delete)
}
