const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

UserSchema.methods.encryptPassword = async password => {   // utiliza .methods de mongoose para crear un metodo
    const salt = await bcrypt.genSalt(5);   // genera un salt para utilizar el string en ese segundo parametro del hash
    return await bcrypt.hash(password, salt);  // retorna un password hasheado en base al salt
}

UserSchema.methods.matchPassword = async function(password) {  // utiliza .methods de mongoose para crear un metodo
    return await bcrypt.compare(password, this.password) //devuelve booleano
}

module.exports = model('User', UserSchema);