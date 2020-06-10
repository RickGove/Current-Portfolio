// import icons
import CSS from '../../img/logo_css.png';
import HTML from '../../img/logo_html.png';
import JS from '../../img/logo_js.png';
import NODE from '../../img/logo_node.png';
import REDUX from '../../img/logo_redux.png';
import logoREACT from '../../img/logo_react.png';
import STYLED from '../../img/logo_SC.png';
import REACTrouter from '../../img/logo_reactRouter.png';
import CAKE from '../../img/cake.png';
import NPM from '../../img/logo_npm.png';
import CONSTRUCT from '../../img/logo_construction.png';
import GIT from '../../img/logo_git.png';
import GITHUB from '../../img/logo_github.svg';

//

export const data = {
	styles: {
		accent: '#FF0000',
		darkBg: '#35424a',
		thridBG: '#f7d794',
		lightBg: '#f4f4f4',
		textLight: '#f4f4f4',
		textDark: 'black',
		////////
		// border-bottom:
		borderDef: `none`,
		borderSpan: `5px solid darkgrey`,
		////////
		hover: '#cccccc',
	},

	about: {
		subhead: `Rick is a front-end web developer specializing in professional websites that meet the clients' needs.`,
		contentP1: `I am currently a freelance web designer. I have been a music teacher, a fridge delivery sepcialist, and an English teacher... but now I have found my passion in designing websites. `,

		contentP2: `Programming and designing have been close to me ever since I was a child and my father and I built our first computer together in 1998. It was then that I discovered the joy of programming with Borland Delphi, Visual Basic, and BASIC. It's such a rewarding process to see your hard work produce a website or an app. I used to code as a hobby, but during these quarantine times I have spent a lot of time working on developing webpages: relearning HTML; discovering how JavaScript has changed the face of the internet; and seeing how the ever-changing React and Redux are advancing webpages into the future.`,

		contentP3: `I am excited and eager to build my career in the web development industry. I am currently developing web pages for free for the experience. Please contact me if you are interested. Whatever the clients wishes are, I can deliver.`,
	},
};

export const projects = [
	{
		name: `Personal Website`,
		description: ` The site you're currently on... A modern single page website with definitive examples of order, simplicity and user experience. Organized to ensure content and navigation stay on the same page brings out a flawless and efficient user experience. Using cutting-edge CSS like flexbox and grid displays; React for modern HTML display; Styled-Components for ease of coding, this page shows off the tools a modern website should be built from. A good template for an advertising website for a small business, company, or artist.`,
		tools: [HTML, CSS, JS, logoREACT, STYLED, NPM],
	},
	{
		name: `Gove's Weather`,
		description: ` CURRENTLY UNDER CONSTRUCTION.... A weather site that's a cut above. Including a built-in image displayer based on location search, this website shows how a single page app should interact with data from the web. This project is currently under construction`,
		tools: [CONSTRUCT, HTML, CSS, JS, logoREACT, STYLED, REDUX, CONSTRUCT],
	},
];

//////// Project Templates //////
/////////////////////////////////
/* 
  {
 	name: ``,
 	description: ``,
 	tools: []
   },
*/

export const sections = [`About`, `Contact`, `Tools`, `Projects`];

export const tools = [
	{
		name: 'HTML 5',
		Description:
			'HTML5 is the basis for structuring and presenting content on the Internet.',
		logo: HTML,
	},
	{
		name: 'JavaScript',
		Description:
			'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, etc...',
		logo: JS,
	},
	{
		name: 'CSS 3',
		Description: `CSS is used for styling HTML and websites. Cutting edge CSS like 'grid' and 'flex-box' are used on this site you see now.`,
		logo: CSS,
	},
	{
		name: 'Cornerstone Technologies',
		Description: `HTML CSS and JS are the cornerstone technologies of the internet. They work together to form the vast majority of the internet, and most all other technology builds upon the ground layed by them.`,
		logo: CAKE,
	},
	{
		name: 'React',
		Description:
			'React is a JavaScript library built to improve user experience from the team at Facebook.',
		logo: logoREACT,
	},
	{
		name: 'Styled-Components',
		Description:
			'Styled-Components combines React and CSS to make reading and writing code easier and cleaner.',
		logo: STYLED,
	},
	{
		name: 'Redux',
		Description:
			'Redux is a JavaScript library for managing data - known as state - in a React app.',
		logo: REDUX,
	},
	{
		name: 'React Router',
		Description:
			'React Router is a React library to handle the user interface, and make routing more user friendly.',
		logo: REACTrouter,
	},
	{
		name: `NPM`,
		Description: `NPM is used to create and install libraries into a React App`,
		logo: NPM,
	},
	{
		name: 'Node JS',
		Description: `Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.`,
		logo: NODE,
	},
	{
		name: `Git`,
		Description: `Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers.`,
		logo: GIT,
	},
	{
		name: `GitHub`,
		Description: `The world's leading software development platform; GitHub brings together the world's largest community of developers to discover, share, and build better software.`,
		logo: GITHUB,
	},
];

/*
template for new tools

{
	name: `NAME`,
	Description:
		`DESC`,
	logo: LOGO,
},

*/
