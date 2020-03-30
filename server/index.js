// should be where skwell is initiated
/* eslint-disable no-magic-numbers */
const express = require( "express" );
const bodyParser = require( "body-parser" );
const logger = require( "morgan" );

const app = express();

app.use( bodyParser.json() );
app.use( logger( "tiny" ) );

app.use( require( "./routes" ) );

app.listen( 3001, () =>
	console.log( "Express server is running on localhost:3001" )
);
