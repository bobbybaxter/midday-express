const { Router } = require( "express" );
const router = new Router();

module.exports = skwell => {
	router.post( "/", ( req, res ) => {
		const newCard = req.body;
		return res.send( newCard );
	} );

	return router;
};
