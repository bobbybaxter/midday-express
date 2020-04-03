module.exports = app => {
	const { skwell } = app;
	async function getCards() {
		try {
			return await skwell.query(
				"select * from Card where Version = 300"
			);
		} catch ( err ) {
			return console.error( err );
		}
	}

	return async function( req, res ) {
		const cards = await getCards();
		res.send( cards );
	};
};
