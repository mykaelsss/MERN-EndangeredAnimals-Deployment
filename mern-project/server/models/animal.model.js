const mongoose = require('mongoose')

const EndangeredAnimalSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    population: {
        type: Number
    },
    img: {
        type: String
    },
    location: {
        type: Array,
        locations: {
            type: String
        }
    },
    cause_of_endangerment: {
        type: String
    },
    description: {
        type: String
    },
    more_info: {
        type: String
    }
}, { timestamps: true })

module.exports.EndangeredAnimal = mongoose.model("EndangeredAnimal", EndangeredAnimalSchema)
