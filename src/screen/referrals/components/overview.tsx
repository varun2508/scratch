import React, { useState } from "react";
import {
	ScrollView,
	TouchableWithoutFeedback,
	Image,
	TextInput,
} from "react-native";
import styled from "styled-components/native";
import { Devider } from "../../../components/ui/Deviders";
import { AppButton, Add } from "../../../components/shared";
import { postReferralCode } from "../../../apis/referrals";
import { useAppContext } from "../../../providers/AppProvider";

const Overview = function(props: Props): React.ReactElement {
	const { store } = useAppContext();
	const [friendReferralCode, setFriendReferralCode] = useState("");
	const [disableSubmitButton, setDisableSubmitButton] = useState(true);
	const [requestResult, setRequestResult] = useState({});

	const { user } = store;
	const handleFriendReferralCode = (code) => {
		setFriendReferralCode(code);
		if (code.length >= 7) {
			setDisableSubmitButton(false);
		}
		if (code.length < 7) {
			setDisableSubmitButton(true);
		}
	};

	const handleSubmitReferral = async (): Promise => {
		console.log("----callhandleSubmitReferral------");

		const result = await postReferralCode({
			referralCode: friendReferralCode,
			firstName: user.firstName,
			id: user.id,
			lastName: user.lastName,
			date: new Date(),
			amount: 50,
		});
		setRequestResult(result);

		console.log("----result in handleSubmitReferral------", result);
	};
	return (
		<ScrollView style={{ marginBottom: 60 }}>
			<Wrapper>
				<TextContainer>
					<Title>My referral earnings</Title>
				</TextContainer>
				<CardContaienr>
					<Card>
						<PointContainer>
							<Image
								style={{ marginRight: 4 }}
								source={require("icons/coin.png")}
							/>
							<Points>{150}</Points>
							<PointsText>tockens</PointsText>
						</PointContainer>
					</Card>
					<ButtonContainer>
						<TouchableWithoutFeedback
							onPress={(): void =>
								console.log("----------transfer to my funds")
							}
						>
							<Button>Add to my balance</Button>
						</TouchableWithoutFeedback>
					</ButtonContainer>
				</CardContaienr>
				<Devider style={{ marginTop: 15 }}></Devider>
				<TextContainer>
					<Title>My referral code</Title>
				</TextContainer>
				<ReferralCodeContainer>
					<ReferralCodeText>{user.referralCode}</ReferralCodeText>
				</ReferralCodeContainer>
				<ButtonContainer>
					<TouchableWithoutFeedback
						onPress={(): void => console.log("----------transfer to my funds")}
					>
						<Button>Copy to clipboard</Button>
					</TouchableWithoutFeedback>
				</ButtonContainer>
				<ButtonContainer>
					<TouchableWithoutFeedback
						onPress={(): void => console.log("----------transfer to my funds")}
					>
						<Button>Share code</Button>
					</TouchableWithoutFeedback>
				</ButtonContainer>

				<TextContainer>
					<Title>Did a friend invite you?</Title>
				</TextContainer>
				<Wrapper>
					<TextInput
						style={{
							height: 40,
							borderBottomWidth: 1,
							borderBottomColor: "#4F4F4F",
							width: "100%",
							marginBottom: 12,
							fontSize: 16,
						}}
						textAlign="center"
						onChangeText={(code) => handleFriendReferralCode(code)}
						value={friendReferralCode}
						placeholder="Enter your friend`s referral code"
						autoCapitalize="none"
						placeholderTextColor="#828282"
						maxLength={8}
					/>
					<AppButton
						isDisabled={disableSubmitButton}
						text={"Submit"}
						onClick={handleSubmitReferral}
					></AppButton>
				</Wrapper>
				<ResultContainer>
					{requestResult.success ? (
						<SuccessText>{requestResult.message}</SuccessText>
					) : (
						<FailText>{requestResult.message}</FailText>
					)}
				</ResultContainer>
				<HowItWorksContainer
					onPress={(): void => console.log("----------how it works pressed")}
				>
					<HowItWorksText>How it works?</HowItWorksText>
				</HowItWorksContainer>
				<Add></Add>
			</Wrapper>
		</ScrollView>
	);
};

const Wrapper = styled.View``;

const Title = styled.Text`
	margin-top: 16px;
	font-weight: bold;
	font-size: 16px;
	color: #000;
`;

const TextContainer = styled.View``;

const Button = styled.Text`
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	color: #fe5b3b;
`;
const Points = styled.Text`
	font-weight: bold;
	font-size: 28px;
	line-height: 36px;
	color: #fe5b3b;
	margin-right: 16px;
`;
const CardContaienr = styled.View`
	flex-direction: row;
	align-items: center;
`;
const ButtonContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const PointContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const PointsText = styled.Text`
	font-size: 13px;
	line-height: 16px;
	color: #828282;
`;

const Card = styled.View`
	width: 194px;
	height: 76px;
	border: 1px solid #e0e0e0;
	margin-top: 8;
	margin-right: 35px;
	border-radius: 5px;
	padding-left: 16px;
	justify-content: center;
	background: #fff;
`;

const ReferralCodeContainer = styled.View`
	width: 60%;
	height: 50px;
	border-bottom-width: 1px;
	border-bottom-color: #c6c6c9;
	padding-bottom: 6px;
	margin-top: 10px;
	margin-bottom: 10px;
	align-self: center;
	justify-content: center;
	flex-direction: row;
	align-items: flex-end;
`;
const ReferralCodeText = styled.Text`
	font-size: 18px;
	color: #828282;
`;
const ResultContainer = styled.View`
	align-self: center;
	justify-content: center;
	flex-direction: row;
	margin-top: 8px;
`;
const SuccessText = styled.Text`
	color: green;
	font-size: 13px;
`;

const FailText = styled.Text`
	color: red;
	font-size: 13px;
`;
const HowItWorksContainer = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 70px;
`;
const HowItWorksText = styled.Text`
	font-size: 18px;
	color: #828282;
`;
export default Overview;
