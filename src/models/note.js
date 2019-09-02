require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getNote: (page) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT note.*, category.name_category, category.color FROM note INNER JOIN category ON note.id_category = category.id_category", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    noteDetail: (id_note) => {
        console.log(id_note)
        return new Promise((resolve, reject) => {
            connection.query("SELECT note.*, category.name_category, category.color FROM note INNER JOIN category ON note.id_category = category.id_category WHERE id_note =?", id_note, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    noteSort: (ket) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT note.*, category.name_category, category.color FROM note INNER JOIN category ON note.id_category = category.id_category ORDER BY note.title " + ket, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    searchNote: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT note.*, category.name_category, category.color FROM note INNER JOIN category ON note.id_category = category.id_category WHERE note.title LIKE ?", `%${data}%`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    byCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT note.*, category.name_category, category.color FROM note INNER JOIN category ON note.id_category = category.id_category WHERE note.id_category =?", id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertNote: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO note SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })

    },
    deleteNote: (id_note) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM note WHERE id_note = ?", id_note, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateNote: (id_note, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE note SET ? WHERE id_note = ?", [data, id_note], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}