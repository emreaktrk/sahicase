var functions = require('firebase-functions')
var express = require('express')

const users = express()
const books = express()

users.get('/login/:username', (req, res) => {
    try {
        var static = require('./static/users.json');
        var found = static.find(user => user.username == req.params.username.toLowerCase())

        if (found != null) {
            res.send(found)
            return
        }

        res.status(404).send({
            message: "User not found"
        })
    } catch (e) {
        res.status(500).send({
            message: "Unknown error occurred"
        })
    }
});

books.get('/all/:page', (req, res) => {
    try {
        if (req.params.page <= 0) {
            res.status(400).send({
                message: "Page must be bigger than zero"
            })
            return
        }

        var static = require('./static/books.json');
        var sub = static.slice((req.params.page - 1) * 10, req.params.page * 10)

        if (sub.length > 0) {
            res.send(sub)
            return
        }

        res.status(404).send({
            message: "End of array"
        })
    } catch (e) {
        res.status(500).send({
            message: "Unknown error occurred"
        })
    }
});

books.get('/detail/:id', (req, res) => {
    try {
        if (req.params.page <= 0) {
            res.status(400).send({
                message: "Id must be bigger than zero"
            })
            return
        }

        var static = require('./static/books.json');
        var datum = static.at(req.params.id)

        if (datum !== null) {
            res.send(sub)
            return
        }

        res.status(404).send({
            message: "Book not found"
        })
    } catch (e) {
        res.status(500).send({
            message: "Unknown error occurred"
        })
    }
})


exports.users = functions.https.onRequest(users)
exports.books = functions.https.onRequest(books)