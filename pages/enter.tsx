import React from 'react';
import { NextPage } from 'next';
import { FaGoogle, FaGithub, FaSignOutAlt } from 'react-icons/fa';
import { auth, githubAuthProvider, googleAuthProvider } from '../lib/firebase';
import { useUserAuthentication } from '../context/user';
import { Logo } from '../components/Logo';
import { UserProfileForm } from '../components/UsernameForm';
import { SignInForm } from '../components/SignInForm';

const EnterPage: NextPage = () => {
  const { user, username } = useUserAuthentication();

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <main className="container mx-auto flex flex-col items-center py-9 px-6">
      <div className="p-8 shadow-lg rounded-md border border-gray-100 space-y-6 bg-white w-full max-w-md">
        <Logo className="text-pink-500 w-12 fill-current sm:w-14" />
        {user && username && (
          <button className="btn-sign-in max-w-[224px]" onClick={handleSignOut}>
            <FaSignOutAlt className="mr-4" />
            Sign out
          </button>
        )}

        {user && !username && <UserProfileForm />}

        {!user && <SignInForm />}
      </div>
    </main>
  );
};

export default EnterPage;
