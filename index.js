require('babel-core/polyfill');
require('isomorphic-fetch');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Counter from './components/Counter';
import configureStore from './store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { ReduxRouter } from 'redux-router';
import {Route} from 'react-router';

const store = configureStore();

ReactDOM.render(
	<div>
	  <Provider store={store}>
			<ReduxRouter />
	  </Provider>
		<DebugPanel top right bottom>
	    <DevTools store={store} monitor={LogMonitor} />
		</DebugPanel>
	</div>,
  document.getElementById('root')
);
