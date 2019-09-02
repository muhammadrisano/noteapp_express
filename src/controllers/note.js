const noteModels = require('../models/note')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getNote: (req, res) => {
        noteModels.getNote()
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    noteDetail: (req, res) => {
        const id_note = req.params.id_note
        console.log(id_note)
        noteModels.noteDetail(id_note)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertNote: (req, res) => {
        const { title, id_category, content } = req.body
        const data = {
            title,
            id_category,
            content,
            created_at: new Date(),
            updated_at: new Date()
        }
        console.log(data)
        noteModels.insertNote(data)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    noteSort: (req, res) => {
        const ket = req.params.ket
        console.log(ket)
        noteModels.noteSort(ket)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    byCategory: (req, res) => {
        const id_category = req.params.id_category
        noteModels.byCategory(id_category)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateNote: (req, res) => {
        const id_note = req.params.id_note
        const { title, id_category, content } = req.body
        const data = {
            title,
            id_category,
            content,
            created_at: new Date(),
            updated_at: new Date()
        }
        noteModels.updateNote(id_note, data)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteNote: (req, res) => {
        const id_note = req.params.id_note
        noteModels.deleteNote(id_note)
            .then((resultnote) => {
                const result = resultnote
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

