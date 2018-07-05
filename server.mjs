// instead of setting up your catch all server, you can also 'http-server index.html -f ./index.html'

import logger from 'morgan';
import express from 'express';

// Setup
////////////////////////////////////////////////////////////////////////

const app = express();

app.on('SIGUSR2', () => { process.exit(0); });  // nodemon fix

// Define port to run server on
var port = process.env.APPLICATION_PORT || 8100 ;

app.use( logger('dev') );
app.use( express.static( '.' ) );
app.set( 'view engine', 'html' ) ;

// Web Requests
////////////////////////////////////////////////////////////////////////

app.use( '*', function(req, res) {
    res.sendFile(`${process.env.PWD}/index.html`);
} );

// Start Server
////////////////////////////////////////////////////////////////////////

app.listen( port, '0.0.0.0' ) ;
console.log( 'Listening on port %s...', port ) ;
