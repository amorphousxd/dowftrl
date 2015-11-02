import React from 'react';
import { Route, Router } from 'react-router';
import App from './containers/App';
import Counter from './components/Counter';
import Search from './components/Search';

export default (
	<Router>
	  <Route path="/" component={App}>
			<Route path="/counter" component={Counter} />
		</Route>
		<Route path="/search" component={Search} />
	</Router>
);
