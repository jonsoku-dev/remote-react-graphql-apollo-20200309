const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "이름을 입력하세요. "]
    },
    email: {
      type: String,
      required: [true, "이메일을 입력하세요."],
      unique: true
    },
    password: {
      type: String,
      required: [true, "비밀번호를 입력하세요"]
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
