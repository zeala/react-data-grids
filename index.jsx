require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';


export class App extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	render() {
		console.log(' app render called');
		return (
			<div>Simple React + Babel + Bootstrap + Webpack

			<div className="ag-fresh" style={{'backgroundColor': 'gray', width: '400px', height: '400px'}}>
				this is a test
				<AgGridReact
					// listen for events with React callbacks

					// binding to properties within React State or Props
					showToolPanel={this.state.showToolPanel}
					quickFilterText={this.state.quickFilterText}
					icons={this.state.icons}

					// column definitions and row data are immutable, the grid
					// will update when these lists change
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}

					// or provide props the old way with no binding
					rowSelection="multiple"
					enableSorting="true"
					enableFilter="true"
					rowHeight="22"
					/>
			</div>

			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
