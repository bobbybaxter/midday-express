module.exports = app => {
	return async function( { params }, res ) {
		const card = await app.data.card.getById( params.cardId );
		res.send( card );
	};
};

// const errorHandler = route => ( req, res, next = console.error ) =>
// 	Promise.resolve( route( req, res ) ).catch( next );

// module.exports = app => {
// 	return errorHandler(
// 		async function( { params }, res ) {
// 		// const card = await app.data.card.getById( params.cardId );
// 			const card = err;
// 			res.send( card );
// 		} );
// };
