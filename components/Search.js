import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/search';

import ResultsTable from './Table';

class Search extends Component {

	constructor(props){
		super(props);
		this.onQueryChange = this.onQueryChange.bind(this);
		this.state = {
			query: ''
		}
	}

  render() {
    const { search, results } = this.props;
		const { query } = this.state;
		
    return (
			<div className="container">
	      <p>
	        Quey: {query} <br/>
					<input type="text" value={query} onChange={this.onQueryChange}/>
	        <button onClick={search.bind(this, this.state.query)}>Search</button>
	      </p>
				<div>
					<ResultsTable results={results}/>
				</div>
			</div>
    );
  }

	onQueryChange(e){
		this.setState({query: e.target.value});
	}
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
	results: PropTypes.array.isRequired,
};


function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
