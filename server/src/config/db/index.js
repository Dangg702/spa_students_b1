import mongoose from 'mongoose';
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

async function connect() {
    try {
        await mongoose.connect(
            process.env.DBHOST,  { useUnifiedTopology: true, useNewUrlParser: true }
            
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.error('Error connecting');
    }
}

export default { connect };
