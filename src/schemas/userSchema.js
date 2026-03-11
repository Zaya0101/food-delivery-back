const { model, Schema, models } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true],
    },
    password: {
      type: String,
      required: [true],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const UserModel = models.User || model("User", UserSchema);

module.exports = UserModel;
