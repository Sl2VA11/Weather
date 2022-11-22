const { Schema, model } = require("mongoose");
const {handleSaveErrors} = require("../helpers/handleSaveErrors");
const weatherSchema = new Schema(
  {
    city: {
      type: String,
      required: [true, "Set name for city"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

weatherSchema.post("save", handleSaveErrors);

const weather = model("weathers", weatherSchema);

module.exports = weather;
