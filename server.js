const express = require('express');
const graphqlHTTP = require('express-graphql');
const gqlSchema = require('./graphql/gqlSchema.js');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const cors = require('cors');

// database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useCreateIndex: true})
.then( () => console.log("database connected") )
.catch( (err) => console.error(err) );

// app init
const app = express(); //app.use(express.json());

// allow cross-origing requests
app.use( cors() );

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use( express.static('client/build') );
    app.get( '*', (req, res) => {
        res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
    } );
}

// graphql middleware
app.use( '/graphql', graphqlHTTP({ schema: gqlSchema, graphiql: true }) );

// port listening
app.listen(process.env.PORT || 4000, function(){
    console.log('listening for requests on port 4000');
});
