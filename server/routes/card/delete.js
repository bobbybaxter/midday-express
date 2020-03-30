const express = require( "express" );
const router = new express.Router();

let cards = {
	1: {
		id: "1",
		title: "card1"
	},
	2: {
		id: "2",
		title: "card2"
	}
};

router.delete( "/api/cards/:cardId", ( req, res ) => {
	const cardToDelete = cards[ req.params.id ];

	cards = cards.filter( card => {
		if ( card.id !== cardToDelete.id ) {
			return true;
		}
		return false;
	} );

	return res.send( "Book is deleted", cards );
} );

module.exports = router;
