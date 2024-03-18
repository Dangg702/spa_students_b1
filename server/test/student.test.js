// during the test the env variable is set to test
process.env.NODE_ENV = 'test'
import server from '../server.js'; // Import backend app

import { expect } from 'chai';
import request from 'supertest';
import Student from '../src/app/models/StudentModel.js';

// Describe the test suite
describe('StudentController Unit Test', function() {
    //Before each test we empty the database
    // beforeEach((done) => {
    //     Student.deleteMany({}, function(err){});
    //     done();
    // });

    // Test case for showAll method
    describe('GET /student', function() {
      it('should return a list of students', function(done) {
        // Create mock data
        const mockStudents = [
          { mssv: '001', name: 'Trần Thiện Huy', gk: 8, tk: 9, th: 6, ck: 9, teacher: "Nguyễn Thành Thái", description: "không có" },
          { mssv: '002', name: 'Trần Hoàng Tuấn', gk: 7, tk: 10, th: 8, ck: 8, teacher: "Nguyễn Thành Thái", description: "không có" }
        ];
  
        // Mock the Student.find() method
        Student.find = function() {
          return Promise.resolve(mockStudents);
        };
  
        request(server)
          .get('/student')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
  
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'success');
            expect(res.body).to.have.property('data').to.deep.equal(mockStudents);
  
            done();
          });
      });
    });
  
    // Test case for search method
    describe('GET /student/search/:mssv', function() {
      it('should return a student by MSSV', function(done) {
        // Create a mock student
        const mockStudent = { mssv: '011', name: 'Hải Đăng', gk: 7, tk: 10, th: 8, ck: 8, teacher: "Nguyễn Thành Thái", description: "không có" };
        
        // Mock the Student.findOne() method
        Student.findOne = function() {
          return Promise.resolve(mockStudent);
        };
  
        request(server)
          .get('/student/search/005')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
  
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'success');
            expect(res.body).to.have.property('data').to.deep.equal(mockStudent);
  
            done();
          });
      });
  
      it('should return "student not found" if no student is found', function(done) {
        // Mock the Student.findOne() method to return no student
        Student.findOne = function() {
          return Promise.resolve(null);
        };
  
        request(server)
          .get('/student/search/001')
          .expect('Content-Type', /json/)
          .expect(404)
          .end(function(err, res) {
            if (err) return done(err);
  
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'student not found');
  
            done();
          });
      });
    });
  
    // Test case for create method
    describe('POST /student/create', function() {
      it('should create a new student', function(done) {
        const newStudent = { mssv: '005', name: 'Hải Đăng', gk: 7, tk: 10, th: 9, ck: 9, teacher: "Trương Bá Phúc", description: "không có" };
  
        request(server)
          .post('/student/create')
          .send(newStudent)
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
  
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'Create success');
  
            // Clean up the created student from the database
            // Student.deleteOne({ mssv: newStudent.mssv }).exec();
            
            done();
          });
      });
    });
  
    // Test case for update method
    describe('PUT /student/update/:mssv', function() {
      it('should update a student by MSSV', function(done) {
        const updatedStudent = { name: 'Updated Name' };
  
        // Create a mock student for updating
        const mockStudent = { mssv: '001', name: 'John Doe' };
  
        // Mock the Student.findOne() method to return the mock student
        Student.findOne = function() {
          return Promise.resolve(mockStudent);
        };
  
        // Mock the Student.updateOne() method
        Student.updateOne = function(query, update) {
          expect(query).to.deep.equal({ mssv: '001' });
          expect(update).to.deep.equal(updatedStudent);
          return Promise.resolve();
        };
  
        request(server)
          .put('/student/update/001')
          .send(updatedStudent)
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
  
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'Update success');
  
            done();
          });
      });
    });

    // Test case for delete method
    describe('DELETE /student/delete/:mssv', function() {
        it('should delete a student by MSSV', function(done) {
        // Create a mock student for deletion
        const mockStudent = { mssv: '001', name: 'Trần Thiện Huy' };
    
        // Mock the Student.deleteOne() method
        Student.deleteOne = function(query) {
            expect(query).to.deep.equal({ mssv: '001' });
            return Promise.resolve();
        };
    
        request(server)
            .delete('/student/delete/001')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
            if (err) return done(err);
    
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message', 'Delete success');
    
            done();
            });
        });
    });
});  