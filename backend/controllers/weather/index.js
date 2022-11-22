const getAll = require('./getAll')
const getById = require('./getById')
const postWeather = require("./postWeather");
const putById = require("./putById");
const putFavorite = require("./putFavorite");
module.exports = {
  getAll,
  getById,
  postWeather,
  putById,
  putFavorite,
};