import styled from 'styled-components';

export const WallPic = styled.div`
	height: 100%;
	width: 100%;

	img {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	#load-pics {
		display: none;
	}
`;
