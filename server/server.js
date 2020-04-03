/* eslint-disable no-magic-numbers */
const express = require( "express" );
const server = express();

module.exports = app => {
	const { log, logger } = app;
	const PORT = process.env.PORT;

	server.use( require( "./routes" )( app ) );
	server.use( logger );

	server.listen( PORT, () => {
		log.info( `Express server is running on localhost:${ PORT }` );
	} );

	return server;
};
