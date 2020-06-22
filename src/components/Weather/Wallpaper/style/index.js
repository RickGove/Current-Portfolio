import styled from 'styled-components';

export const WallPic = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;

	img {
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: -1;
	}

	#load-pics {
		display: none;
	}
`;
