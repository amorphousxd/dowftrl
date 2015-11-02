import React from 'react';
import {RaisedButton} from 'material-ui';

class MyAwesomeReactComponent extends React.Component {
	constructor(props){
			super(props);
	}

  render() {
    return (
        <RaisedButton label="Default" />
    );
  }
};

export default MyAwesomeReactComponent;
