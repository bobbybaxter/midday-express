const { Router } = require( "express" );
const router = new Router();

module.exports = skwell => {
	router.put( "/:cardId", ( req, res ) => {
		const updatedCard = req.body;
		return res.send( updatedCard );
	} );

	return router;
};
