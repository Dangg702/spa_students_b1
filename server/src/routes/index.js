import studentRouter from './student.js';

function routes(app) {
    app.use('/student', studentRouter)
}

export default routes
