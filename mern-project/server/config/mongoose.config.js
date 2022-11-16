const mongoose = require('mongoose')
const db = "AnimalEndangermentdb"

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`Database connection to ${db} has been established`))
    .catch( err => console.log("There was an error", err ))
