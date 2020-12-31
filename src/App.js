import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

// Regular function – functional component – it can be arrow function
// What´s the difference between both usage
function App() {
	return (
		<Fragment>
			<Header />

			<main className="py-3">
				<Container>
					<Hero />
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
