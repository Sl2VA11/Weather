const { User } = require("../../models/user");

const bcrypt = require("bcryptjs");
const signup = async (req, res) => {
  const {name,email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (user) {
    return res.json({ status: 409, message: "Email in use" });
  }
  const hashPassword = await bcrypt.hash(password , 10)
  const result = await User.create({name, email , password: hashPassword})
   
  res.json({
    status: 201,
    message: {
      user: {
        
        email: result.email,
      },
    },
  });
};

module.exports = signup;
