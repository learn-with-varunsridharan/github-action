const core   = require( '@actions/core' );
const github = require( '@actions/github' );

async function run() {
	try {
		if( typeof process.env.GITHUB_TOKEN === 'undefined' ) {
			throw new Error( 'GITHUB_TOKEN ENV Variable Is Required' );
		}

		const octokit = github.getOctokit( process.env.GITHUB_TOKEN );
		const context = github.context;
		const time    = ( new Date() ).toTimeString();

await octokit.issues.create( {
	...context.repo,
	title: `New issue! | Action Runner ID #${process.env.GITHUB_RUN_NUMBER}`,
	body: `Hello There,
	Current Time Is : ${time}
	`
} );

	} catch( error ) {
		core.setFailed( error.message );
	}
}

run();
