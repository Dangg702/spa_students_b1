const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://haidang:fX4Lc5QdReQF4VDo@cluster0test.0urha7d.mongodb.net/student_db?retryWrites=true&w=majority',
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.error('Error connecting');
    }
}

module.exports = { connect };
