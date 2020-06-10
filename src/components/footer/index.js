import React from 'react';
import { FootCon } from './FootStyle';
import me from '../../img/RBG.jpg';
import email from '../../img/logo_email.png';
import linked from '../../img/logo_linked.png';
import twitter from '../../img/logo_twitter.png';
import logo from '../../img/logo.png';
import by from '../../img/by.png';

function Footer() {
	return (
		<FootCon>
			<div className="top__div">
				<ul className="footer__top">
					<li className="top__left">
						<img alt="Rick Gove - Front End Engineer" src={logo} />
					</li>
					<li className="top__right">
						<img alt="Rick Gove" src={me} />
					</li>
				</ul>
			</div>
			<div className="middle">
				<ul className="middle__list">
					<li>
						Built in Navapolatsk, Belarus <img alt="Belarus" src={by} />
					</li>
					<li className="copyright">
						&copy; 2020 Rick Gove. All right reserved.
					</li>
				</ul>
			</div>
			<div className="bottom">
				<ul className="bottom__list">
					<li>
						<a href="mailto:rick.gove.developer@gmail.com">
							<img alt="email" src={email} />
						</a>
					</li>
					<li>
						<a href="http://www.linkedin.com/in/richard-gove-developer">
							<img alt="LinkedIn" src={linked} />
						</a>
					</li>

					<li>
						<a href="http://twitter.com/@gove_rick">
							<img alt="Twitter" src={twitter} />
						</a>
					</li>
				</ul>
			</div>
		</FootCon>
	);
}

export default Footer;
