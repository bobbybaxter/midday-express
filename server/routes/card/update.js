const express = require( "express" );
const router = new express.Router();

router.put( "/api/cards/:cardId", ( req, res ) => {
	const updatedCard = req.body;
	return res.send( updatedCard );
} );

module.exports = router;
