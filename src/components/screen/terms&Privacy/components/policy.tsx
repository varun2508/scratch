import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Policy = function(props: Props): React.ReactElement {
	return (
		<ScrollView style={{ marginBottom: 60 }}>
			<Wrapper>
				<TextContainer>
					<Title>Privacy policy</Title>
					<SubText>
						This Privacy Policy applies to all of the services offered by S&W
						LLC and its affiliates, services offered on third-party sites, such
						as advertising services. This Privacy Policy doesn’t apply to
						services that have separate privacy policies that do not incorporate
						this Privacy Policy. This Privacy Policy doesn’t apply to: The
						information practices of other companies and organizations that
						advertise our services Services offered by other companies or
						individuals, including products or sites that may include our
						services, be displayed to you in search results, or be linked from
						our services
					</SubText>
					<Title>About this policy</Title>
					<SubText>
						This Privacy Policy is meant to help you understand what information
						we collect, why we collect it, and how you can update, manage,
						export, and delete your information.
					</SubText>
				</TextContainer>
			</Wrapper>
		</ScrollView>
	);
};

const Wrapper = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #c6c6c9;
	padding-bottom: 16px;
`;
const SubText = styled.Text`
	font-size: 14px;
	line-height: 20px;
	align-items: center;
	color: #4f4f4f;
`;

const Title = styled.Text`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	color: #4f4f4f;
`;

const TextContainer = styled.View``;

export default Policy;
