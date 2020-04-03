const skwell = require( "skwell" );
const config = require( "../configs/config" );

const sql = skwell.connect( {
	username: config.sql.username,
	password: config.sql.password,
	server: config.sql.server,
	database: config.sql.database
} );

module.exports = sql;
