// const dataFactory = require( "./data" );
const app = require( "./index" );

beforeAll( async () => {
	// jest.mock( "./data" );
	jest.mock( "./index" );
} );

describe( "when app is started up", () => {
	// let skwell,
	// 	log,
	// 	logger,
	// 	middleware,
	// 	server;

	beforeEach( async () => {
		// app.data = jest.fn();

		// skwell = "skwell";
		// log = "log";
		// logger = "logger";
		// middleware = {
		// 	context: jest.fn()
		// };
		// server = "server";
	} );

	it( "should build app object", () => {
		expect( app ).toHaveProperty( "skwell" );
		// expect( app.data ).toBeNull();
		// expect( app ).toMatchObject( {
		// 	skwell,
		// 	log,
		// 	logger,
		// 	middleware,
		// 	data,
		// 	server
		// } );
	} );

	afterEach( () => {
		jest.resetModules();
	} );
} );
