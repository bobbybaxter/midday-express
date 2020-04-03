/* eslint-disable no-magic-numbers */
const middlewareFactory = require( "./middleware" );
const sqlFactory = require( "./setup/sql" );
const serverFactory = require( "./server" );
const dataFactory = require( "./data" );

const pino = require( "pino" );
const expressPino = require( "express-pino-logger" );

const log = pino( { level: process.env.LOG_LEVEL } );
const logger = expressPino( { log } );

const app = {
	skwell: sqlFactory,
	log,
	logger
};

app.middleware = middlewareFactory( app );
app.data = dataFactory( app );
app.server = serverFactory( app );
