const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
        mssv: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        gk: { type: Number},
        tk: { type: Number },
        th: { type: Number},
        ck: { type: Number },
        teacher: { type: String},
        description: { type: String }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;