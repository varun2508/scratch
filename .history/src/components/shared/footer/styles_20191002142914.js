import styled from 'styled-components/native';

export const Footer = styled.View`
	height: 80;
	justify-content: center;
`;

export const FooterTab = styled.View`
	flex-direction: row;
	background-color: #fff;
	height: 80;
	align-self: center;
	align-items: center;
	justify-content: space-around;
	padding-left: 10;
	padding-right: 10;
	border-width: 1;
	border-color: rgb(223, 223, 226);
	width: 100%;
`;

export default {
	footerButton: {
		marginTop: -2,
	},
};
