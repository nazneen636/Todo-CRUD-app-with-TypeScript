const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    emailIsVerified: { type: Boolean, default: false },
    otp: { type: Number },
    otpExpiry: { type: Date },
  },
  { timestamps: true }
);

// // email already exists
// userSchema.pre("save", async function (next) {
//   const isExists = await this.constructor.findOne({
//     $or: [{ email: this.email }],
//   });
//   if (isExists && isExists._id.toString() !== this._id.toString()) {
//     throw new Error("Email already exists");
//   }
//   next();
// });

// make a hash password with mongoose middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
  }
  next();
});

// compare password
userSchema.methods.comparePassword = async function (humanPass) {
  return await bcrypt.compare(humanPass, this.password);
};

module.exports = mongoose.model("User", userSchema);
