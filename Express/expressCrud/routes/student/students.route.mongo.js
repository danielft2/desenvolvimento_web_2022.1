var express = require('express');
var router = express.Router();
const StudentService = require('../../services/student/student.service.mongo');

router.get('/list', function(req, res, next) {
    StudentService.list(req, res);
})

router.get('/retrive/:id', function(req, res, next) {
    StudentService.retrive(req, res);
})

router.post('/create', function(req, res, next) {
    StudentService.create(req, res);
})

router.put('/edit/:id', function(req, res, next) {
    StudentService.update(req, res);
})

router.delete('/delete/:id', function(req, res, next) {
    StudentService.delete(req, res);
})

module.exports = router;
