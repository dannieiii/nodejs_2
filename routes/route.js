const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/projects', main.projects);
router.get('/blogs', main.blogs);
router.get('/service', main.service);
router.get('/team', main.team);
router.get('/time', main.time);
router.get('/faq', main.faq);
router.get('/clients', main.clients);
router.get('/careers', main.careers);
router.get('/contact', main.contact);




module.exports = router; 