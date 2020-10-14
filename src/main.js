import * as riot from 'riot';
import App from './app.riot';
import plans from './plans.js';
import weekdays from './weekdays.js';
import exercises from './exercises.js';
import { root } from '../package.json';

import '../style.css';

if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', function() {
    navigator.serviceWorker.register( './sw.js', { scope: './' } ).then( reg => {
      reg.onupdatefound = function() {
        var worker = reg.installing;

        worker.onstatechange = function() {
          switch (worker.state) {
          case 'installed':
            console.log( '[sw] registered', reg.scope );

            if ( navigator.serviceWorker.controller ) {
              console.log( '[sw] content installed or updated' );
            }
            else {
              console.log( '[sw] content available offline' );
            }

            break;
          case 'redundant':
            console.log( '[sw] installing became redundant', reg.scope );

            break;
          }
        };
      };
    } ).catch( err => console.log( '[sw] failed to register', err ) );
  } );
}

const mountApp = riot.component( App );

mountApp( document.getElementById( 'root' ), {
  root: root,
  plans: plans,
  weekdays: weekdays,
  exercises: exercises,
} );

