import styled from 'styled-components/native';

export const Footer = styled.View`
height: 80,
justify-content: center,
`;

export default {
	footer: {
		height: 80,
		justifyContent: 'center',
	},
	footerTab: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 80,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingLeft: 10,
		paddingRight: 10,
		borderTopWidth: 1,
		borderColor: 'rgb(223, 223, 226)',
		width: '100%',
	},
	footerButton: {
		marginTop: -2,
	},
};
