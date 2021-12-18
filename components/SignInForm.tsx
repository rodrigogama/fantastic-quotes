import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { auth, githubAuthProvider, googleAuthProvider } from '../lib/firebase';

export const SignInForm = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (err) {
      alert('couldnt login with google');
    }
  };

  const handleSignInWithGithub = async () => {
    try {
      await auth.signInWithPopup(githubAuthProvider);
    } catch (err) {
      alert('couldnt login with github');
    }
  };

  return (
    <div className="form">
      <div>
        <h3 className="form-title">Sign in to your account</h3>
        <p className="text-sm text-gray-600 sm:text-base">
          And start sharing your{' '}
          <span className="text-pink-500 underline decoration-pink-500 decoration-wavy">
            fantastic quotes
          </span>{' '}
          today!
        </p>
      </div>

      <button
        className="btn-sign-in max-w-[224px]"
        onClick={handleSignInWithGoogle}
      >
        <FaGoogle className="mr-4" />
        Sign in with Google
      </button>
      <button
        className="btn-sign-in max-w-[224px]"
        onClick={handleSignInWithGithub}
      >
        <FaGithub className="mr-4" />
        Sign in with Github
      </button>
    </div>
  );
};
