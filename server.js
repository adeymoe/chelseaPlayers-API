const express = require('express')
const app = express()
const PORT =3000

const rappers ={
    '21 savage':{
        name: 'BIG 4L',
        birthLocation: 'London, England',
        age: 21
    },
    'kodak black':{
        name: 'PROJECT BABY',
        birthLocation: '1804',
        age: 21
    },
    'unknown':{
        name: 'nobody',
        birthLocation: 'Asgard',
        age: 1000
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname, '/index.html')

})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`lets goooo ${PORT}`)
})