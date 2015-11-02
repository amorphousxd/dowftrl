import React from 'react';

class ResultsTable extends React.Component {
	constructor(props){
			super(props);
	}

  render() {
		const {results} = this.props;
		const data = results.map( (result, index) => {
			return (
				<tr key={index}>
					<td>{result.value}</td>
				</tr>
			);
		});

    return (
			<table className="bordered">
				<thead>
					<tr>
							<th data-field="id">Name</th>
							<th data-field="name">Item Name</th>
							<th data-field="price">Item Price</th>
					</tr>
				</thead>
				<tbody>
					{data}
				</tbody>
			</table>
    );
  }
};

export default ResultsTable;
