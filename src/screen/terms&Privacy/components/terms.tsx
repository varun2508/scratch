import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const TermsAndConditions = function(props: Props): React.ReactElement {
	return (
		<ScrollView style={{ marginBottom: 60 }}>
			<Wrapper>
				<TextContainer>
					<Title>Terms and Conditions</Title>
					<SubText>
						By using our Services, you are agreeing to these terms. Please read
						them carefully. Our Services are very diverse, so sometimes
						additional terms or product requirements (including age
						requirements) may apply. Additional terms will be available with the
						relevant Services, and those additional terms become part of your
						agreement with us if you use those Services.
					</SubText>
					<Title>Using our Services</Title>
					<SubText>
						You must follow any policies made available to you within the
						Services. Don’t misuse our Services. For example, don’t interfere
						with our Services or try to access them using a method other than
						the interface and the instructions that we provide. You may use our
						Services only as permitted by law, including applicable export and
						re-export control laws and regulations. We may suspend or stop
						providing our Services to you if you do not comply with our terms or
						policies or if we are investigating suspected misconduct. Using our
						Services does not give you ownership of any intellectual property
						rights in our Services or the content you access. You may not use
						content from our Services unless you obtain permission from its
						owner or are otherwise permitted by law. These terms do not grant
						you the right to use any branding or logos used in our Services.
						Don’t remove, obscure, or alter any legal notices displayed in or
						along with our Services. Our Services display some content that is
						not Google’s. This content is the sole responsibility of the entity
						that makes it available. We may review content to determine whether
						it is illegal or violates our policies, and we may remove or refuse
						to display content that we reasonably believe violates our policies
						or the law. But that does not necessarily mean that we review
						content, so please don’t assume that we do. In connection with your
						use of the Services, we may send you service announcements,
						administrative messages, and other information. You may opt out of
						some of those communications. Some of our Services are available on
						mobile devices. Do not use such Services in a way that distracts you
						and prevents you from obeying traffic or safety laws.
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

export default TermsAndConditions;
