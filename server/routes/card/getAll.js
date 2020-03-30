const express = require( "express" );
const router = new express.Router();

const cards = {
	1: {
		id: "1",
		title: "card1"
	},
	2: {
		id: "2",
		title: "card2"
	}
};

router.get( "/api/cards", ( req, res ) => {
	return res.send( Object.values( cards ) );
} );

module.exports = router;
