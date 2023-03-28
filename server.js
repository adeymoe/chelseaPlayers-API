const express = require('express')
const app = express()
const cors = require('cors')
const PORT =3000

app.use(cors())

const chelseaPlayers ={
    'kepa arrizabalaga':{
        age: 28,
        nationalTeam: 'SPAIN'
    },
    'mateo kovacic':{
        age: 28,
        nationalTeam: 'CROATIA'
    },
    'christian pulisic':{
        age: 24,
        nationalTeam: 'USA'
    },
    'unknown':{
        age: 0,
        nationalTeam: 'not updated'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (request, response) => {
    const playerName = request.params.name.toLowerCase()
    if(chelseaPlayers[playerName]){
        response.json(chelseaPlayers[playerName])
    }else{
        response.json(chelseaPlayers['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`lets goooo ${PORT}`)
})