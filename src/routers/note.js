const express = require('express');
const Route = express.Router();
const noteController = require('../controllers/note')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', noteController.getNote)
    .get('/:id_note', noteController.noteDetail)
    .get('/sort/:ket', noteController.noteSort)
    .get('/bycategory/:id_category', noteController.byCategory)
    .post('/', noteController.insertNote)
    .patch('/:id_note', noteController.updateNote)
    .delete('/:id_note', noteController.deleteNote)

module.exports = Route;