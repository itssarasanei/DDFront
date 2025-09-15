import { jwtDecode } from 'jwt-decode';

import { User } from '@/api/methods/models';
import { useAppDispatch } from '@/store';
import { setUserData } from '@/store/slices/userDataSlice';

export const useUserData = () => {
  const dispatch = useAppDispatch();

  const getUserData = () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUserData(jwtDecode<User>(token)));
    }
  };

  return { getUserData };
};
