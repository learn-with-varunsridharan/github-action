// Imports @actions/core npm library into core variable
const core = require( '@actions/core' );

try {
	// Get The Input Value of `who-to-greet`
	const nameToGreet = core.getInput( 'who-to-greet' );

	// Prints The Value of nameToGreet in Github Action
	core.info( `Hello ${nameToGreet}!` );

	// Fetchs The Current Time
	const time = ( new Date() ).toTimeString();

	// Sets The Time As Output
	core.setOutput( "time", time );
} catch( error ) {
	core.setFailed( error.message );
}
