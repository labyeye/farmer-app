import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { phone, password, name, photo, gender } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      phone,
      password: hashPassword,
      photo,
      gender,
    });

    // Save the user to the database
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Function to login a user
export const login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    const { password: userPassword, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      data: { ...rest },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
