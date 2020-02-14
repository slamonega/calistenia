import * as riot from 'riot';
import App from './app.riot';

if ( 'serviceWorker' in navigator ) {
	window.addEventListener( 'load', function() {
		navigator.serviceWorker.register( './dist/sw.js', { scope: './' } ).then(
			res => console.log( 'service worker registered', res.scope ),
			err => console.log( 'service worker not registered', err )
		);
	} );
}

const mountApp = riot.component( App );
const app = mountApp( document.getElementById( 'root' ), {} );
