const express = require( "express" );
const router = new express.Router();

router
	.use( require( "./create" ) )
	.use( require( "./delete" ) )
	.use( require( "./get" ) )
	.use( require( "./getAll" ) )
	.use( require( "./update" ) );

module.exports = router;
