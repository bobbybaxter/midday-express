const { Router } = require( "express" );
const router = new Router();

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

module.exports = skwell => {
	router.delete( "/:cardId", ( req, res ) => {
		const cardToDelete = cards[ req.params.id ];

		cards = cards.filter( card => {
			if ( card.id !== cardToDelete.id ) {
				return true;
			}
			return false;
		} );

		return res.send( "Card is deleted", cards );
	} );

	return router;
};
