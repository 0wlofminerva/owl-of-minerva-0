import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { ReactComponent as Logo } from '../../img/logo.svg';

const Header = () => {
	return (
		<header>
			<Navbar className="bg-dark-blue" expand="lg" CollapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">
						<div className="owlfominerva-brand">
							<Logo className="header__logo d-inline-blocks" />
							{/* <p className="wordmark d-inline-block">Owl of Minerva</p>*/}
						</div>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">
								<i className="fas fa-user"></i>Sign in
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
