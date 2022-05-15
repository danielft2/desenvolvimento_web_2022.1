const express = require('express');
const router = express.Router();
const ProfessorService = require('../../services/professor/professor.service.mongo');

router.get('/list', function(req, res) {
    ProfessorService.list(req, res);
})

router.get('/retrive/:id', function(req, res) {
    ProfessorService.retrive(req, res);
})

router.post('/create', function(req, res) {
    ProfessorService.create(req, res);
})

router.put('/edit/:id', function(req, res) {
    ProfessorService.upadte(req, res);
})

router.delete('/delete/:id', function(req, res) {
    ProfessorService.delete(req, res);
})

module.exports = router;