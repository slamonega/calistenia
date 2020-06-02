import plans from '../plans.json';

let ccplans = plans[ 'Convict Conditioning' ];

function mkid( str ) {
	return str.replace( ' ', '-' ).toLowerCase();
}

Object.entries( ccplans ).forEach( entry => {
	let [ name, plan ] = entry;
	let days = [];

	Object.entries( plan.days ).forEach( day => {
		let exercises = [];
		day[1].forEach( exercise => {
			exercise.id = mkid( exercise.name );
			exercises.push( exercise );
		} );
		days.push( exercises );
	} );

	plan.name = name;
	plan.id = mkid( name );
	plan.days = days;
} );

export default ccplans;
