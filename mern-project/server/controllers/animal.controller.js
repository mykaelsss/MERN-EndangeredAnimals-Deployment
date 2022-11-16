const { EndangeredAnimal } = require('../models/animal.model')

module.exports = {
    readAll( req, res ){
        EndangeredAnimal.find()
        .then( animals => res.json( { animals: animals } ))
        .catch( err => res.json( err ))
    },
    readOne( req, res ){
        EndangeredAnimal.findOne( { _id: req.params.id } )
        .then( animal => res.json( { animal: animal } ))
        .catch( err => res.json( err ))
    },
    create( req, res ){
        const { name, population, img, location, cause_of_endangerment, description, more_info } = req.body
        EndangeredAnimal.create({
            name,
            population,
            img,
            location,
            cause_of_endangerment,
            description,
            more_info
        })
        .then( animal => res.json( { animal: animal } ))
        .catch( err => res.json( err ))
    },
    update( req, res ){
        EndangeredAnimal.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
        .then( animal => res.json( { animal: animal } ))
        .catch( err => res.json( err ))
    },
    delete( req, res ){
        EndangeredAnimal.deleteOne( { _id: req.params.id } )
        .then( animal => res.json({ animal: animal}))
        .catch( err => res.json( err ))
    }
}
