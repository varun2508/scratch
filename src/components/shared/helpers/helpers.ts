import { AsyncStorage, Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export async function getItem(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    const response = JSON.parse(data);

    return response;
  } catch (err) {
    return err;
  }
}

export async function deleteItem(key) {
  const data = await AsyncStorage.removeItem(key);
  return data;
}

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const normalizeAmount = (valueInp) => {
  let value = valueInp;

  if (value) {
    value = value.replace(/[^0-9]/g, '');
  }

  return value;
};
