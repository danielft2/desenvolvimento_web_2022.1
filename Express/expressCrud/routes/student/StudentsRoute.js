var express = require('express');
var router = express.Router();
var StudentService = require('../../services/student/StudentService');

router.get('/list', (req, res, next) => {
    return res.json(StudentService.list());
})

router.get('/:id', (req, res, next) => {
    return res.json(StudentService.getStudent(req.params.id));
})

router.post('/create', (req, res, next) => {
    return res.json(StudentService.create(req.body));
})

router.put('/edit/:id', (req, res, next) => {
    const student = StudentService.edit(req.params.id, req.body)
    return res.json(student);
})

router.delete('/delete/:id', (req, res, next) => {
    const ok = StudentService.delete(req.params.id);
    if(ok) return res.json({"sucess": true})
    else return res.json({"sucess": false})
})

module.exports = router;