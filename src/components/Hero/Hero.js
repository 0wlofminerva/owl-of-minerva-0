import React from 'react';
import '../../css/style.css';

const hero = () => {
	return (
		<header className="header">
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">Owl of Minerva</span>
					<span className="heading-primary--sub">Art Studio</span>
				</h1>
				<div className="btn-container">
					<a href="#" className="btn btn--white btn--animated">
						Lorem
					</a>
				</div>
			</div>
		</header>
	);
};

export default hero;
