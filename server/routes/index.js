const { Router } = require( "express" );
const router = new Router();
const bodyParser = require( "body-parser" );

module.exports = app => {
	router
		.use( bodyParser.json() );

	router
		.use( "/api/cards", require( "./card" )( app ) );

	return router;
};
