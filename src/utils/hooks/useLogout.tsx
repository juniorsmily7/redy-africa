import { useLogoutMutation } from '@/services/store/api/authApiSlice';

import { useRouting } from './useRouting';
import { LOGIN_URL } from '@/data/urls.data';

export function useLogout() {
  const { goTo } = useRouting();
  const [logout, { isLoading }] = useLogoutMutation();
  async function handleLogout() {
    await logout()
      .unwrap()
      .then((res) => {
        if (res) {
          goTo(LOGIN_URL);
        }
      });
  }

  return {
    handleLogout,
    isLoading,
  };
}
