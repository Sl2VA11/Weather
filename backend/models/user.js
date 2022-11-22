const { Schema, model } = require("mongoose");
// const Joi = require("joi");
const { handleSaveErrors } = require("../helpers/handleSaveErrors");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
     
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const User = model('user', userSchema)

module.exports = {
   User
}