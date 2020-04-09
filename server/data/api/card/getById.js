module.exports = app => {
	const { skwell } = app;

	return async function getCardById( cardId ) {
		const card = await skwell.queryFirst(
			skwell.fromFile( "./sql/getById" ),
			{
				id: {
					val: cardId,
					type: skwell.bigint
				}
			}
		);

		if ( !card ) { throw new Error( "Not Found" ); }

		return card;
	};
};
