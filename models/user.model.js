import { Schema, model, models } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String, // cloudinary url
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    methods: {
      isPasswordCorrect: async function (password) {
        return await bcryptjs.compare(password, this.password);
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

const User = models.User || model("User", userSchema);

export default User;
