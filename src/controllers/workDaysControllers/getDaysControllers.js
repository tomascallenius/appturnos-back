
const getDaysController = async () => {
    try {
        const listo = 'simulamos que son todos los dias creados'
        return listo;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}

module.exports = getDaysController;