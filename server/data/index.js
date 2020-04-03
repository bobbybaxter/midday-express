const requireDirectory = require( "require-directory" );

module.exports = app => {
	return requireDirectory( module, "./api", {
		visit( obj ) {
			return obj( app );
		}
	} );
};
