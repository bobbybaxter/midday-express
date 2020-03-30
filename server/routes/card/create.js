const express = require( "express" );
const router = new express.Router();

router.post( "/api/cards", ( req, res ) => {
	const newCard = req.body;
	return res.send( newCard );
} );

module.exports = router;
