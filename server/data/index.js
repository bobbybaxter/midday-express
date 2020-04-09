const requireDirectory = require( "require-directory" );

module.exports = app => {
	return requireDirectory( module, "./api", {
		visitor( obj ) {
			return obj( app );
		}
	} );
};
