import React from "react";
import logo from "./logo.svg";

import "./App.scss";

class App extends React.Component {
	state = {
		name: "",
		greeting: ""
	}

	handleChange = e => {
		this.setState( { name: e.target.value } );
	}

	handleSubmit = e => {
		e.preventDefault();
		fetch( `/api/greeting?name=${ encodeURIComponent( this.state.name ) }` )
			.then( response => response.json() )
			.then( state => this.setState( state ) );
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<form onSubmit={ this.handleSubmit }>
						<label htmlFor="name">Enter your name: </label>
						<input
							id="name"
							type="text"
							value={ this.state.name }
							onChange={ this.handleChange } />
						<button type="submit">Submit</button>
					</form>
					<p>{this.state.greeting}</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
				</header>
				<button className="btn btn-danger">help</button>
			</div>
		);
	}
}

export default App;
