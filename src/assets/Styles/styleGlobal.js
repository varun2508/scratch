
import {
  isIOS,
} from 'src/Common/Helpers';

import styleConstants from './styleConstants';

const isIOSv = isIOS();

export default {
  formHeading: {
    fontSize: 35,
    fontFamily: styleConstants.font.bold,
    marginBottom: 35,
  },
  get formHeading32() {
    return {
      ...this.formHeading,
      fontSize: 32,
    };
  },
  formHeadingDescription: {
    color: styleConstants.color.dark3,
    fontSize: 16,
    marginBottom: 30,
  },
  formError: {
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 20,
    paddingTop: 20,
  },
  textDescription: {
    color: styleConstants.color.gray,
    textAlign: 'center',
  },
  textDescriptionBold: {
    color: styleConstants.color.dark,
    fontWeight: '900',
    textAlign: 'center',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  aICenter: {
    alignItems: 'center',
  },
  aITop: {
    alignItems: 'flex-start',
  },
  aIStart: {
    alignItems: 'flex-start',
  },
  aIEnd: {
    alignItems: 'flex-end',
  },
  aIRight: {
    alignItems: 'flex-end',
  },
  aSCenter: {
    alignSelf: 'center',
  },
  aSTop: {
    alignSelf: 'flex-start',
  },
  aSStart: {
    alignSelf: 'flex-start',
  },
  aSEnd: {
    alignSelf: 'flex-end',
  },
  aSStretch: {
    alignSelf: 'stretch',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  jCCenter: {
    justifyContent: 'center',
  },
  jCSpaceBetween: {
    justifyContent: 'space-between',
  },
  oFHidden: {
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontFamily: styleConstants.font.bold,
  },
  colorPrimary: {
    color: styleConstants.color.primary,
  },
  colorWhite: {
    color: 'white',
  },
  colorDark: {
    color: styleConstants.color.dark,
  },
  colorDark2: {
    color: styleConstants.color.dark2,
  },
  colorDark3: {
    color: styleConstants.color.dark3,
  },
  colorDark3alpha: {
    color: styleConstants.color.dark3alpha,
  },
  colorGray: {
    color: styleConstants.color.gray,
  },
  colorGray2: {
    color: styleConstants.color.gray2,
  },
  colorGray3: {
    color: styleConstants.color.gray3,
  },
  colorGray7: {
    color: styleConstants.color.gray7,
  },
  colorGray10: {
    color: styleConstants.color.gray10,
  },
  colorGray11: {
    color: styleConstants.color.gray11,
  },
  colorGray12: {
    color: styleConstants.color.gray12,
  },
  tintColorGray11: {
    tintColor: styleConstants.color.gray11,
  },
  m0: {
    margin: 0,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  m30: {
    margin: 30,
  },
  mV0: {
    marginVertical: 0,
  },
  mV5: {
    marginVertical: 5,
  },
  mV10: {
    marginVertical: 10,
  },
  mV15: {
    marginVertical: 15,
  },
  mV20: {
    marginVertical: 20,
  },
  mV25: {
    marginVertical: 25,
  },
  mV30: {
    marginVertical: 30,
  },
  mV40: {
    marginVertical: 40,
  },
  mV50: {
    marginVertical: 50,
  },
  mV60: {
    marginVertical: 60,
  },
  mV70: {
    marginVertical: 70,
  },
  mV80: {
    marginVertical: 80,
  },
  mH5: {
    marginHorizontal: 5,
  },
  mH10: {
    marginHorizontal: 10,
  },
  mH15: {
    marginHorizontal: 15,
  },
  mH20: {
    marginHorizontal: 20,
  },
  mH25: {
    marginHorizontal: 25,
  },
  mH30: {
    marginHorizontal: 30,
  },
  mH35: {
    marginHorizontal: 35,
  },
  mB0: {
    marginBottom: 0,
  },
  mB5: {
    marginBottom: 5,
  },
  mB10: {
    marginBottom: 10,
  },
  mB15: {
    marginBottom: 15,
  },
  mB20: {
    marginBottom: 20,
  },
  mB25: {
    marginBottom: 25,
  },
  mB30: {
    marginBottom: 30,
  },
  mB40: {
    marginBottom: 40,
  },
  mB50: {
    marginBottom: 50,
  },
  mB55: {
    marginBottom: 55,
  },
  mB80: {
    marginBottom: 80,
  },
  mT0: {
    marginTop: 0,
  },
  mT5: {
    marginTop: 5,
  },
  mT10: {
    marginTop: 10,
  },
  mT15: {
    marginTop: 15,
  },
  mT20: {
    marginTop: 20,
  },
  mT25: {
    marginTop: 25,
  },
  mT30: {
    marginTop: 30,
  },
  mT40: {
    marginTop: 40,
  },
  mT45: {
    marginTop: 45,
  },
  mT50: {
    marginTop: 50,
  },
  mT60: {
    marginTop: 60,
  },
  mT70: {
    marginTop: 70,
  },
  mT80: {
    marginTop: 80,
  },
  mT85: {
    marginTop: 85,
  },
  mT90: {
    marginTop: 90,
  },
  mT100: {
    marginTop: 100,
  },
  mL0: {
    marginLeft: 0,
  },
  mL5: {
    marginLeft: 5,
  },
  mL10: {
    marginLeft: 10,
  },
  mL15: {
    marginLeft: 15,
  },
  mL20: {
    marginLeft: 20,
  },
  mL30: {
    marginLeft: 30,
  },
  mR0: {
    marginRight: 0,
  },
  mR5: {
    marginRight: 5,
  },
  mR10: {
    marginRight: 10,
  },
  mR15: {
    marginRight: 15,
  },
  mR20: {
    marginRight: 20,
  },
  mR30: {
    marginRight: 30,
  },
  mR70: {
    marginRight: 70,
  },
  pT0: {
    paddingTop: 0,
  },
  pT5: {
    paddingTop: 5,
  },
  pT10: {
    paddingTop: 10,
  },
  pT15: {
    paddingTop: 15,
  },
  pT20: {
    paddingTop: 20,
  },
  pT25: {
    paddingTop: 25,
  },
  pT30: {
    paddingTop: 30,
  },
  pB0: {
    paddingBottom: 0,
  },
  pB10: {
    paddingBottom: 10,
  },
  pB15: {
    paddingBottom: 15,
  },
  pB20: {
    paddingBottom: 20,
  },
  pB25: {
    paddingBottom: 25,
  },
  pB30: {
    paddingBottom: 30,
  },
  pB40: {
    paddingBottom: 40,
  },
  pB50: {
    paddingBottom: 50,
  },
  pB60: {
    paddingBottom: 60,
  },
  pB70: {
    paddingBottom: 70,
  },
  pB80: {
    paddingBottom: 80,
  },
  pB90: {
    paddingBottom: 90,
  },
  pB100: {
    paddingBottom: 100,
  },
  pB200: {
    paddingBottom: 200,
  },
  pB210: {
    paddingBottom: 210,
  },
  pB220: {
    paddingBottom: 220,
  },
  pB230: {
    paddingBottom: 230,
  },
  pB240: {
    paddingBottom: 240,
  },
  pB250: {
    paddingBottom: 250,
  },
  pL0: {
    paddingLeft: 0,
  },
  pL5: {
    paddingLeft: 5,
  },
  pL10: {
    paddingLeft: 10,
  },
  pL20: {
    paddingLeft: 20,
  },
  pL30: {
    paddingLeft: 30,
  },
  pR0: {
    paddingRight: 0,
  },
  pR10: {
    paddingRight: 10,
  },
  pR20: {
    paddingRight: 20,
  },
  pR30: {
    paddingRight: 30,
  },
  pR35: {
    paddingRight: 35,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },
  p30: {
    padding: 30,
  },
  pH0: {
    paddingHorizontal: 0,
  },
  pH5: {
    paddingHorizontal: 5,
  },
  pH10: {
    paddingHorizontal: 10,
  },
  pH15: {
    paddingHorizontal: 15,
  },
  pH20: {
    paddingHorizontal: 20,
  },
  pH30: {
    paddingHorizontal: 30,
  },
  pV10: {
    paddingVertical: 10,
  },
  pV20: {
    paddingVertical: 20,
  },
  pV30: {
    paddingVertical: 30,
  },
  width100p: {
    width: '100%',
  },
  width10: {
    width: 10,
  },
  width20: {
    width: 20,
  },
  width25: {
    width: 25,
  },
  width30: {
    width: 30,
  },
  width40: {
    width: 40,
  },
  width50: {
    width: 50,
  },
  width60: {
    width: 60,
  },
  width70: {
    width: 70,
  },
  width80: {
    width: 80,
  },
  width90: {
    width: 90,
  },
  width100: {
    width: 100,
  },
  width110: {
    width: 110,
  },
  width120: {
    width: 120,
  },
  width130: {
    width: 130,
  },
  width140: {
    width: 140,
  },
  width150: {
    width: 150,
  },
  width290: {
    width: 290,
  },
  width300: {
    width: 300,
  },
  heightNull: {
    height: null,
  },
  border: {
    borderWidth: 1,
  },
  noBorder: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  borderRight: {
    borderRightWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  borderLRB: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  flexNull: {
    flex: null,
  },
  flex: {
    flex: 1,
  },
  flex03: {
    flex: 0.3,
  },
  flex05: {
    flex: 0.5,
  },
  flex08: {
    flex: 0.8,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexGrowNull: {
    flexGrow: null,
  },
  fS10: {
    fontSize: 10,
  },
  fS11: {
    fontSize: 11,
  },
  fS12: {
    fontSize: 12,
  },
  fS14: {
    fontSize: 14,
  },
  fS15: {
    fontSize: 15,
  },
  fS16: {
    fontSize: 16,
  },
  fS17: {
    fontSize: 17,
  },
  fS18: {
    fontSize: 18,
  },
  fS20: {
    fontSize: 20,
  },
  fS21: {
    fontSize: 21,
  },
  fS22: {
    fontSize: 22,
  },
  fS23: {
    fontSize: 23,
  },
  fS24: {
    fontSize: 24,
  },
  fS25: {
    fontSize: 25,
  },
  fS26: {
    fontSize: 26,
  },
  fS27: {
    fontSize: 27,
  },
  fS28: {
    fontSize: 28,
  },
  fS29: {
    fontSize: 29,
  },
  fS30: {
    fontSize: 30,
  },
  fS32: {
    fontSize: 32,
  },
  fS35: {
    fontSize: 35,
    lineHeight: 35,
  },
  lH26: {
    lineHeight: 26,
  },
  fontLabel: {
    fontSize: 14,
    fontFamily: styleConstants.font.medium,
  },
  fontBody: {
    fontSize: 16,
    fontFamily: styleConstants.font.regular,
  },
  fontBodySmall: {
    fontSize: 14,
    fontFamily: styleConstants.font.medium,
  },
  headingXS: {
    fontSize: 20,
    fontFamily: styleConstants.font.bold,
  },
  headingS: {
    fontSize: 24,
    fontFamily: styleConstants.font.bold,
  },
  headingM: {
    fontSize: 32,
    fontFamily: styleConstants.font.bold,
  },
  headingL: {
    fontSize: 44,
    fontFamily: styleConstants.font.bold,
  },
  headingXL: {
    fontSize: 50,
    fontFamily: styleConstants.font.bold,
  },
  fontRegular: {
    fontFamily: styleConstants.font.regular,
  },
  fontMedium: {
    fontFamily: styleConstants.font.medium,
  },
  fontRegularItalic: {
    fontFamily: styleConstants.font.regularItalic,
  },
  backgroundDefault: {
    backgroundColor: styleConstants.color.containerBgColor,
  },
  bGGray8: {
    backgroundColor: styleConstants.color.gray8,
  },
  bGWhite: {
    backgroundColor: styleConstants.color.white,
  },
  bGDark: {
    backgroundColor: styleConstants.color.dark,
  },
  inputHeightBase: {
    height: styleConstants.inputHeightBase,
  },
  inputIcon: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 0,
  },
  inputIconLabel: {
    paddingBottom: 3,
  },
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerBl: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  postitionAbsolute: {
    position: 'absolute',
  },
  postitionAbsoluteRight: {
    position: 'absolute',
    right: 0,
  },
  tabFooterPadding: {
    paddingBottom: 80,
  },
  pickerItemText: {
    fontSize: 20,
    fontFamily: styleConstants.font.bold,
  },
  pickerItemText2: {
    color: styleConstants.color.gray,
    fontSize: 18,
  },
  pickerItemAddText: {
    fontSize: 18,
    fontFamily: styleConstants.font.medium,
  },
  pickerItemAddIcon: {
  },
  contentPadding: {
    padding: styleConstants.contentPadding,
  },
  contentPaddingV: {
    paddingVertical: styleConstants.contentPadding,
  },
  contentPaddingH: {
    paddingHorizontal: styleConstants.contentPadding,
  },
  contentMargin: {
    margin: styleConstants.contentPadding,
  },
  contentMarginLeft: {
    marginLeft: styleConstants.contentPadding,
  },
  contentMarginRight: {
    marginRight: styleConstants.contentPadding,
  },
  contentMarginV: {
    marginVertical: styleConstants.contentPadding,
  },
  contentMarginH: {
    marginHorizontal: styleConstants.contentPadding,
  },
  contentPadding2: {
    padding: styleConstants.contentPadding2,
  },
  contentMarginH2: {
    marginHorizontal: styleConstants.contentPadding2,
  },
  contentMarginV2: {
    marginVertical: styleConstants.contentPadding2,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  zIndex10: {
    zIndex: 10,
  },
  whatIsAccountBl: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.color.gray,
    paddingTop: 15,
  },
  whatIsAccount: {
    color: styleConstants.color.gray,
    fontSize: 14,
    paddingBottom: 3,
  },
  formLabel: {
    fontSize: 16,
    fontFamily: styleConstants.font.regular,
    lineHeight: 16,
  },
  incAppBl: {
    alignSelf: 'flex-start',
    backgroundColor: styleConstants.color.primary,
    borderRadius: 4,
    padding: 5,
  },
  incAppText: {
    color: styleConstants.color.white,
    fontSize: 14,
    fontFamily: styleConstants.font.medium,
    marginLeft: 0,
    marginRight: 0,
  },
  disclaimerBl: {
    backgroundColor: styleConstants.color.dark4,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  disclaimer: {
    color: styleConstants.color.white2,
  },
  get disclaimerUnderline() {
    return {
      ...this.disclaimer,
      textDecorationLine: 'underline',
    };
  },
  get disclaimerBold() {
    return {
      ...this.disclaimer,
      fontFamily: styleConstants.font.bold,
    };
  },
  get disclaimerP() {
    return {
      ...this.disclaimer,
      marginTop: 20,
    };
  },
  farmImage: {
    borderRadius: 8,
  },
  farmImageShadow: {
    shadowColor: styleConstants.color.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: isIOSv ? 5 : 0,
    margin: isIOSv ? 0 : 5,
    elevation: 3,
    borderRadius: 10,
  },
  tabProfileTitle: {
    fontSize: 20,
  },
  tintColor(tintColor) {
    return { tintColor };
  },
  borderColor(borderColor) {
    return { borderColor };
  },
  borderColorPrimary: {
    borderColor: styleConstants.color.primary,
  },
  borderColorDark3: {
    borderColor: styleConstants.color.dark3,
  },
};
