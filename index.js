const express = require("express")

const app = express()

app.use(express.json())

const user = [{
    name: "Sitonio",
    age: 24,
},]

app.get('/usuarios', function (request, response) {


    response.json(user)
})

app.post('/usuarios', function (request, response) {

    console.log(request.body)

    const newUser = request.body

    user.push(request.body)


    response.status(201).json(newUser)
})


app.delete('/usuarios/:id', function (request, response) {
    console.log(request)

    response.json(users)
})


app.listen(3000, () => {
    console.log("Meu servidor ta ok")
})