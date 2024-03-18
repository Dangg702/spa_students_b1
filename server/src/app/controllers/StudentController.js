import Student from '../models/StudentModel.js';

class StudentController {
    // [GET] /student
    showAll(req, res, next) {
        Student.find({})
            .then((Student) => {
                res.status(200).json({message: "success" , data: Student})
            })
            .catch(next);
    }
    // [GET] /student/search/:mssv
    search(req, res, next) {
        Student.findOne({ mssv: req.params.id })
            .then((Student) => {
                res.status(200).json({data: Student, message: 'success'});
            })
            .catch((err) => {res.status(err.code).json({message: 'student not found'})});
    }
    // [POST] /student/create
    create(req, res, next) {
        const student = new Student(req.body);
        student
            .save()
            .then(() => res.status(200).json({ message: 'Create success', student: student}))
            .catch(next);
    }
    // [PUT] /student/update/:mssv
    update(req, res, next) {
        Student.updateOne({ mssv: req.params.id }, req.body)
            .then(() => res.status(200).json({ message: 'Update success' }))
            .catch(next);
    }
    // [DELETE] /student/delete/:mssv
    delete(req, res, next) {
        Student.deleteOne({ mssv: req.params.id })
            .then(() => res.status(200).json({ message: 'Delete success' }))
            .catch(next);
    }
}

export default new StudentController();
