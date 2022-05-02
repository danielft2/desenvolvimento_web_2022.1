var express = require('express');
const app = require('../../app');
var router = express.Router();
var ProfessorService = require('../../services/professor/ProfessorService');

router.get("/", (req, res, next) => {
    return res.json(ProfessorService.list());
})

router.get("/:id", (req, res, next) => {
    return res.json(ProfessorService.getProfessor(req.params.id));
})

router.put("/edit/:id", (req, res, next) => {
    const professor = ProfessorService.edit(req.params.id, req.body);
    return res.json(professor);
})

router.post("/create", (req, res, next) => {
    return res.json(ProfessorService.create(req.body));
})

router.delete("/delete/:id", (req, res, next) => {
    const ok = (ProfessorService.delete(req.params.id));
    if (ok) return res.json({sucess: true});
    else return res.json({sucess: false});
})


module.exports = router;