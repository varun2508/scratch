import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

const WinContainer = styled.View`
  width: 95%;
  height: 274px;
  margin: 10px auto;
  background-color: #ececee;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 104;
  height: 110px;
`;

const RedText = styled.Text`
  font-size: 28px;
  color: #fe5b3b;
  align-self: baseline;
  /* margin-top: 10px;
	margin-left: 10px; */
  font-weight: bold;
`;

const GreyTextContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
const BoldText = styled.Text`
  font-size: 28px;
  color: #4f4f4f;
  /* margin-top: 10px;
	margin-left: 10px; */
  font-weight: bold;
`;

const GreyText = styled.Text`
  font-size: 18px;
  color: #4f4f4f;
  align-self: baseline;
  margin-top: 5px;
`;

interface Props {
  winState?: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function Results(props: Props): React.ReactElement {
  return (
    <WinContainer>
      {props.winState === 'win' ? (
        <StyledImage source={require('image/Illustration.png')} />
      ) : (
        <StyledImage
          resizeMode={'contain'}
          source={require('image/OBJECTS.png')}
        />
      )}

      <View>
        {props.winState === 'win' ? (
          <RedText>You won 50 tokens!</RedText>
        ) : (
          <GreyTextContainer>
            <BoldText>No win</BoldText>
            <GreyText>However, you 5 tokens back!</GreyText>
          </GreyTextContainer>
        )}
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('PlayScreen')}>
        <View
          style={{
            backgroundColor: '#FBDC42',
            borderRadius: 25,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 12,
          }}
        >
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}>
            Play more
          </Text>
        </View>
      </TouchableOpacity>
    </WinContainer>
  );
}

Results.defaultProps = {
  title: '',
  imgSource: '',
};

export default Results;
