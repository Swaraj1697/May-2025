const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
});

const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;