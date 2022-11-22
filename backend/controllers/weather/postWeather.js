const Joi = require("joi");
const Weather = require("../../models/weather");

const postWeather = async (req, res) => {
  
  const { _id: owner } = req.user;
  const schema = Joi.object({
    city: Joi.string()
      
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    return res.json({
      status: 400,
      message: validation.error.details[0].message,
    });
  }

  const weather = new Weather({ ...req.body, owner });
  
  await weather.save();
  if (!weather) {
    return res.json({ status: 500, message: "Internal server error" });
  }
  res.json({ status: 201, weather });
};

module.exports = postWeather;
