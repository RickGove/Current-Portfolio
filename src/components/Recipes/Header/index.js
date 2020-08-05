import React from 'react';

import SearchBar from './SearchBar';

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<span role="img" aria-label="logo">
					🍴
				</span>
			</div>
			<SearchBar />

			<div className="likes">
				<div className="likes__field">
					<svg className="likes__icon">
						<use href="img/icons.svg#icon-heart"></use>
					</svg>
				</div>
				<div className="likes__panel">
					<ul className="likes__list">
						{/* 
                    <li>
                        <a className="likes__link" href="#23456">
                            <figure className="likes__fig">
                                <img src="img/test-1.jpg" alt="Test">
                            </figure>
                            <div className="likes__data">
                                <h4 className="likes__name">Pasta with Tomato ...</h4>
                                <p className="likes__author">The Pioneer Woman</p>
                            </div>
                        </a>
                    </li>
                 */}
					</ul>
				</div>
			</div>
		</header>
	);
}
