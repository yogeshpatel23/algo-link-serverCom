import { Schema, model, models } from "mongoose";

const tradingAccountSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  broker: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
  },
  lot: {
    type: Number,
    default: 1,
  },
  risk: {
    type: Number,
    default: 1,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: String,
    // transform: (v) => v == new Date().toLocaleDateString("IN"),
  },
  isPrimary: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const TradingAccount =
  models.TradingAccount || model("TradingAccount", tradingAccountSchema);

export default TradingAccount;
