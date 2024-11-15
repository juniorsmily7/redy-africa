import { TokenKey } from '@/data/enum.data';
import cookieStore from 'js-cookie';

function getPersistData(key: string) {
  const user = cookieStore.get(key);
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

function setPersistData<T>(key: string, value: T) {
  const data: Omit<T, 'id'> = value;
  cookieStore.set(key, JSON.stringify(data));
}

function removeItemFromLocalStorage(key: string) {
  cookieStore.remove(key);
}

function removeUserFromLocalStorage() {
  cookieStore.remove(TokenKey.USER_KEY);
}

export {
  setPersistData,
  getPersistData,
  removeItemFromLocalStorage,
  removeUserFromLocalStorage,
};
