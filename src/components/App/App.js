import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Main from '../Main';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />

				<div className="content">
					<Navigation />
					<Main />
				</div>

			</div>
		);
	}
}

export default App;
