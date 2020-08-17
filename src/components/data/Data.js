// import icons
import CSSLOGO from '../../img/logo_css.png';
import HTMLLOGO from '../../img/logo_html.png';
import JSLOGO from '../../img/logo_js.png';
import NODELOGO from '../../img/logo_node.png';
import REDUXLOGO from '../../img/logo_redux.png';
import logoREACT from '../../img/logo_react.png';
import STYLEDLOGO from '../../img/logo_SC.png';
import REACTrouter from '../../img/logo_reactRouter.png';
import CAKE from '../../img/cake.png';
import NPMLOGO from '../../img/logo_npm.png';
// import CONSTRUCT from '../../img/logo_construction.png';
import GITLOGO from '../../img/logo_git.png';
import GITHUBLOGO from '../../img/logo_github.svg';
import GSAPLOGO from '../../img/logo_gsap.svg';

import WEATHERLOGO from '../../img/weather.png';
import PIG from '../../img/dicegame.png';
import SUPER from '../../img/superherosmackdown.png';

export const data = {
	styles: {
		accent: '#2DAEFF',
		darkBg: '#35424a',
		thridBG: '#f7d794',
		lightBg: '#f4f4f4',
		textLight: '#f4f4f4',
		textDark: 'black',
		////////
		//  ottom:
		borderDef: `none`,
		borderSpan: `5px solid darkgrey`,
		////////
		hover: '#cccccc',
	},

	about: {
		subhead: `I am a junior web developer, just beginning my journey into the field. I am working hard every day to get better at what I do, and I hope to soon be employed, and do what I love for a living`,
		contentP1: `I have been a music teacher, a fridge delivery sepcialist, and an English teacher... but now I have found my passion in designing websites. `,

		contentP2: `Programming and designing have been close to me ever since I was a child and my father and I built our first computer together in 1998. It was then that I discovered the joy of programming with Borland Delphi, Visual Basic, and BASIC. It's such a rewarding process to see your hard work produce a website or an app. I used to code as a hobby, but during these quarantine times I have spent a lot of time working on developing webpages: relearning HTML; discovering how JavaScript has changed the face of the internet; and seeing how the ever-changing React and Redux are advancing webpages into the future.`,

		contentP3: `I am excited and eager to build my career in the web development industry. I am currently developing web pages for free for the experience. Please contact me if you are interested. Whatever the clients wishes are, I can deliver.`,
	},
};

export const projects = [
	{
		name: `Personal Website`,
		image: 'none',
		description: [
			` The site you're currently on... A modern single page website with a goal of order, simplicity and user experience. Organized to ensure content and navigation stay on the same page and hoping to bring out a flawless and efficient user experience.`,
			`Using cutting-edge CSS like flexbox and grid displays; React for modern HTML display; Styled-Components CSS for readable code, this page shows off what I have learned so far in React.`,
		],
		tools: [
			HTMLLOGO,
			CSSLOGO,
			JSLOGO,
			logoREACT,
			STYLEDLOGO,
			GSAPLOGO,
			NPMLOGO,
		],
		link: '#',
	},
	{
		name: `Gove's Weather`,
		image: WEATHERLOGO,
		description: [
			`A weather site that features a built-in image finder based on the search. `,
			`
		Using React for UI/UX and Redux for state management, this project taught me how to use Redux to do many things: such as store information, and manipluate DOM elements' styling using React Refs via conditional CSS Styling.`,
			`Additionally, I learned about React hooks, and how to consume several different APIs and to  display the information needed.`,
		],
		tools: [HTMLLOGO, CSSLOGO, JSLOGO, logoREACT, STYLEDLOGO, REDUXLOGO],
		link: '#/weather',
	},
	{
		name: `Super Hero Smackdown`,
		image: SUPER,
		description: [
			`Have you ever wondered who would win in a battle between Superman and Captain Kirk? What about South Park's Captain Hindsight and Kick-Ass? Well, now you can with Super Hero Smackdown: Pit characters from the universes of DC, Marvel, Star Trek, Star Wars, Heros, and Kick-Ass, and many other characters against each other to see who would in a battle ...`,
			`I read about the Super Hero API and I immediately wanted to make a project using it. I was very interested in manipulating DOM elements using JavaScript, React Refs and CSS animations, and I wanted to learn more about React reds. It also taught me about the useState hook.`,
			`So, this is the project I decided to build to create something fun and colourful using JavaScript timeouts, and CSS transitions, transformations, and keyframes.`,
		],
		tools: [HTMLLOGO, CSSLOGO, JSLOGO, logoREACT, STYLEDLOGO],
		link: [`#/SuperHeroSmackdown`],
	},
	{
		name: `Pig - A Dice Game`,
		image: PIG,
		description: [
			`A project from a JavaScript course I took. I moved it into React, added some GSAP animation and other features to flesh it out fully.`,
		],
		tools: [HTMLLOGO, CSSLOGO, JSLOGO, logoREACT, GSAPLOGO, STYLEDLOGO],
		link: '#/DiceGame',
	},
];

//////// Project Templates //////
/////////////////////////////////
/* 
  {
	 name: ``,
	 image: 'none',
 	description: [``],
	 tools: [],
	 link: '',
   },
*/

export const sections = [`About`, `Contact`, `Tools`, `Projects`];

export const tools = [
	{
		name: 'HTML 5',
		Description:
			'HTML5 is the basis for structuring and presenting content on the Internet.',
		logo: HTMLLOGO,
	},
	{
		name: 'JavaScript',
		Description:
			'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, etc...',
		logo: JSLOGO,
	},
	{
		name: 'CSS 3',
		Description: `CSS is used for styling HTML and websites. Cutting edge CSS like 'grid' and 'flex-box' are used on this site you see now.`,
		logo: CSSLOGO,
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
		logo: STYLEDLOGO,
	},
	{
		name: 'Redux',
		Description:
			'Redux is a JavaScript library for managing data - known as state - in a React app.',
		logo: REDUXLOGO,
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
		logo: NPMLOGO,
	},
	{
		name: 'Node JS',
		Description: `Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.`,
		logo: NODELOGO,
	},
	{
		name: `Git`,
		Description: `Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers.`,
		logo: GITLOGO,
	},
	{
		name: `GitHub`,
		Description: `The world's leading software development platform; GitHub brings together the world's largest community of developers to discover, share, and build better software.`,
		logo: GITHUBLOGO,
	},
	{
		name: `GreenSock Animation`,
		Description: `GreenSock, or GSAP, is a fast, robust and smooth animation tool for JavaScript`,
		logo: GSAPLOGO,
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
