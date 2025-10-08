import { model, Schema } from "mongoose";

const contactSchema = new Schema({
  username: { type: String, requires: true },
  email: { type: String, requires: true },
  message: { type: String, requires: true },
});

const Contact = new model("Contact", contactSchema);

export default Contact;
