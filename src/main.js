import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import * as riot from 'riot';
import App from './app.riot';
import plans from './plans.js';
import weekdays from './weekdays.js';
import exercises from './exercises.js';
import observable from '@riotjs/observable';

if ( 'serviceWorker' in navigator ) {
	window.addEventListener( 'load', function() {
		navigator.serviceWorker.register( './dist/sw.js', { scope: './' } ).then(
			res => console.log( 'service worker registered', res.scope ),
			err => console.log( 'service worker not registered', err )
		);
	} );
}

const routes = [
	{ name: 'home', path: '/' },
	{ name: 'exercise', path: '/:id' },
];
const router = createRouter( routes );

let bus = observable( {} );

router.subscribe( msg => {
	bus.trigger( 'view:' + msg.route.name, msg.route );
} );

router.usePlugin( browserPlugin( { useHash: true } ) );

const mountApp = riot.component( App );
const app = mountApp( document.getElementById( 'root' ), {
	router: router,
	plans: plans,
	weekdays: weekdays,
	exercises: exercises,
	bus: bus,
} );

router.start();
