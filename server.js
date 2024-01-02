//This is just a server that responds with json. We are not requesting information from our own API. We are not serving up client-side JS. We are serving up an html file that explains how to use the API that we are creating, because that shit is frustrating without documentation.
const express = require('express') //importing express
const app = express() //now the variable app can use all the express things
//served up a file just to make sure that everything is working, like a boilerplate. response.sendFile(__dirname + '/index.html')
const PORT = 8000
//console logged a string within the app.listen to test
//we will receive query parameters from the user in order to give back specific rappers.

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unkown'
    }
}

app.get('/', (request, response)=>{ //get is a method that comes with express. remember app is now express(). When it hears this network request, it triggers the response.
    response.sendFile(__dirname + '/index.html')//__dirname is just syntax that tells express where to start looking
})
app.get('/api/:name',(request, response) => { //if they add /api/:name to the url endpoint ...args
    const rapperName = request.params.name.toLowerCase() //when the request comes in, if there is text after the /api/ part of the url, we can grab it.
    if(rappers[rapperName]){//checking if rapperName is a property of rappers, so whatever the user enters, see if it's a rapper that exists in our database. 
        response.json(rappers[rapperName]) //if so respond with that rapper.
    }else{
        response.json(rappers['unknown'])
    }
})
app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})