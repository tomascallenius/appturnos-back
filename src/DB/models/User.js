const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    whatsapp: {
      type: Number,
      required: false,
      default: null,
    },
    services: {
      type: Array,
      required: false,
    },
    admin: {
        type: Boolean,
        required: false,
        default: false
    },
    worker: {
        type: Boolean,
        required: false,
        default: false
    }
},{
    timestamps: true
});

UserSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(5);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  // utiliza .methods de mongoose para crear un metodo
  return await bcrypt.compare(password, this.password); //devuelve booleano
};

const User = model("User", UserSchema);

module.exports = User;
