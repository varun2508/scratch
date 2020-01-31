import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Header, Add } from 'shared';
import ScreenFooter from 'shared/footer/index';
import styled from 'styled-components';
const list = [1, 2, 3, 4, 5, 6, 7, 8];

class PlayScreen extends React.Component {
  state = {
    scrollEnabled: false,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header screenTitle='Game' />
        <ScrollView>
          <Container>
            <Wrapper>
              <Title>Featured</Title>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ paddingHorizontal: 20 }}
              >
                {list.map((item) => (
                  <Carusel key={item}>
                    <BigOnTopContainer>
                      <BigImageContainer
                        onPress={() =>
                          this.props.navigation.navigate('GameScreen')
                        }
                      >
                        <BigImage
                          resizeMode={'contain'}
                          source={require('image/image.png')}
                        />
                        <CostViewContainer>
                          <CostView>
                            <CostIcon source={require('icons/coin.png')} />
                            <CostAmountText>{30}</CostAmountText>
                          </CostView>
                        </CostViewContainer>
                      </BigImageContainer>
                      <TwoSmallGameContainer>
                        <SmallImageContainer
                          onPress={() =>
                            this.props.navigation.navigate('GameScreen')
                          }
                        >
                          <SmallImage
                            resizeMode={'stretch'}
                            source={require('image/image-9.png')}
                          />
                          <CostViewContainer>
                            <CostView>
                              <CostIcon source={require('icons/coin.png')} />
                              <CostAmountText>{30}</CostAmountText>
                            </CostView>
                          </CostViewContainer>
                        </SmallImageContainer>
                        <SmallImageContainer
                          onPress={() =>
                            this.props.navigation.navigate('GameScreen')
                          }
                        >
                          <SmallImage
                            resizeMode={'stretch'}
                            source={require('image/image-8.png')}
                          />
                          <CostViewContainer>
                            <CostView>
                              <CostIcon source={require('icons/coin.png')} />
                              <CostAmountText>{30}</CostAmountText>
                            </CostView>
                          </CostViewContainer>
                        </SmallImageContainer>
                      </TwoSmallGameContainer>
                    </BigOnTopContainer>
                  </Carusel>
                ))}
              </ScrollView>
            </Wrapper>
            <View>
              <Title>Top winning this week</Title>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ paddingHorizontal: 20 }}
              >
                {list.map((item) => (
                  <Carusel2>
                    <TwoSmallGameContainer>
                      <SmallImageContainer
                        onPress={() =>
                          this.props.navigation.navigate('GameScreen')
                        }
                      >
                        <SmallImage
                          resizeMode={'stretch'}
                          source={require('image/image-6.png')}
                        />
                        <CostViewContainer>
                          <CostView>
                            <CostIcon source={require('icons/coin.png')} />
                            <CostAmountText>{30}</CostAmountText>
                          </CostView>
                        </CostViewContainer>
                      </SmallImageContainer>
                      <SmallImageContainer
                        onPress={() =>
                          this.props.navigation.navigate('GameScreen')
                        }
                      >
                        <SmallImage
                          resizeMode={'stretch'}
                          source={require('image/image-3.png')}
                        />
                        <CostViewContainer>
                          <CostView>
                            <CostIcon source={require('icons/coin.png')} />
                            <CostAmountText>{30}</CostAmountText>
                          </CostView>
                        </CostViewContainer>
                      </SmallImageContainer>
                    </TwoSmallGameContainer>
                  </Carusel2>
                ))}
              </ScrollView>
            </View>
            <Add></Add>
          </Container>
        </ScrollView>
        <ScreenFooter navigation={this.props.navigation} />
      </View>
    );
  }
}

const BigOnTopContainer = styled.View`
  display: flex;
`;

const Container = styled.View`
  /* padding-left: 18px; */
`;
const Wrapper = styled.View`
  padding-top: 16px;
  height: 300px;
`;
const BigImageContainer = styled.TouchableOpacity`
  height: 142px;
  margin-bottom: 5px;
`;

const TwoSmallGameContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

const SmallImageContainer = styled.TouchableOpacity`
  margin-right: 5px;
`;

const Carusel = styled.View`
  width: 190px;
  height: 384px;
  margin-right: 5px;
`;

const BigImage = styled.Image`
  width: 190px;
  height: 142px;
  border-radius: 3px;
`;

const CostViewContainer = styled.View`
  position: absolute;
  bottom: 3;
  right: 7;
`;

const CostView = styled.View`
  display: flex;
  flex-direction: row;
`;

const CostIcon = styled.Image`
  margin-left: 10px;
  margin-top: 8px;
  margin-right: 4px;
`;

const CostAmountText = styled.Text`
  font-size: 20px;
  color: #fbdc42;
  font-weight: 900;
`;

const SmallImage = styled.Image`
  width: 91px;
  height: 75px;
  border-radius: 3px;
`;

const Carusel2 = styled.View``;
const Title = styled.Text`
  margin-left: 18px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 8px;
`;

export default PlayScreen;
