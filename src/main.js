import * as riot from 'riot';
import App from './app.riot';
import plans from './plans.js';
import weekdays from './weekdays.js';
import exercises from './exercises.js';
import { root } from '../package.json';

if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', function() {
    navigator.serviceWorker.register( './sw.js', { scope: './' } ).then(
      res => console.log( 'service worker registered', res.scope ),
      err => console.log( 'service worker not registered', err )
    );
  } );
}

const mountApp = riot.component( App );

mountApp( document.getElementById( 'root' ), {
  root: root,
  plans: plans,
  weekdays: weekdays,
  exercises: exercises,
} );

