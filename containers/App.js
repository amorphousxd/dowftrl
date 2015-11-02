import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import {Link} from 'react-router';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Link to='/'>
          <h1>App Container</h1>
        </Link>
        <Link to='/counter'>counter</Link><br/>
        <Link to='/search'>search</Link>
        {this.props.children}
      </div>

    );
  }

}

App.propTypes = {
  pushState: PropTypes.func.isRequired,
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {
  pushState
})(App);
