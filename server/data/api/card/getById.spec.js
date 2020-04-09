describe( "when getById is called", () => {
	let cardId, skwell, getById;
	beforeEach( async () => {
		cardId = null;
		skwell = {
			queryFirst: jest.fn().mockResolvedValue( null ),
			fromFile: jest.fn( x => x )
		};
		getById = require( "./getById" )( { skwell } );
	} );

	describe( "when card is not found", () => {
		it( "should throw not found", () => {
			return expect( getById( cardId ) )
				.rejects.toThrow( "Not Found" );
		} );
	} );
} );
