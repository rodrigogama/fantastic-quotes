import React from 'react';
import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';
import { useUserData } from '../hooks/useUserData';

type AuthenticationState = {
  user: User | null | undefined;
  username: string | null;
};

const INITIAL_STATE: AuthenticationState = {
  user: null,
  username: null,
};

export const UserAuthenticationContext = React.createContext(INITIAL_STATE);

export const UserAuthenticationProvider: React.FC = ({ children }) => {
  // @ts-ignore
  const { user, username } = useUserData();

  const authDataValue = React.useMemo(
    () => ({ user, username }),
    [user, username],
  );

  return (
    <UserAuthenticationContext.Provider value={authDataValue}>
      {children}
    </UserAuthenticationContext.Provider>
  );
};

export const useUserAuthentication = () =>
  React.useContext(UserAuthenticationContext);
