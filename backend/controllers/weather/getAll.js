const Weather = require("../../models/weather");

const getAll = async (req, res) => {
   console.log(req.user);
  const { _id: owner } = req.user;
  

  const weather = await Weather.find({ owner }).populate(
    "owner",
    "email subscription"
  );

  res.json({
    status: 200,
    weather,
  });
};

module.exports = getAll;
