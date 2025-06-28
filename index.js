const express = require("express")

const app = express()

app.get('/usuarios/:APARECE', function (request, response) {

    console.log(request.params)

    response.send('Ola deu bom')
})



app.listen(3000, () => {
    console.log("Meu servidor ta okgugu")
})