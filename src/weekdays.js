import { format, setISODay } from 'date-fns';

let weekdays = [];
let now = new Date();

for ( let n = 0; n < 7; n++ ) {
	weekdays[ n ] = format( setISODay( now, n + 1 ), 'iiii' );
}

export default weekdays;
