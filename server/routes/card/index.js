const { Router } = require( "express" );
const router = new Router();

module.exports = app => {
	const { middleware } = app;

	return router
		.use( middleware.context )
		.use( "/:cardId", require( "./get/get" )( app ) )
		.use( "/", require( "./create" )( app ) )
		.use( "/:cardId", require( "./delete" )( app ) )
		.use( "/:cardId", require( "./update" )( app ) );
};
