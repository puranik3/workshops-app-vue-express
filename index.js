const path = require( 'path' );
const express = require( 'express' );

const app = express();

app.use( express.static( path.join( __dirname, 'dist' ) ) );

app.get( '*', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, 'dist/index.html' ) );
});

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => {
    console.log( `server started on PORT = ${PORT}` );
});