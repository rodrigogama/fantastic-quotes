import React from 'react';
import { FiAtSign } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserData } from '../hooks/useUserData';
import { firestore } from '../lib/firebase';

type FormData = {
  username: string;
};

type FormSubmitHandler = SubmitHandler<FormData>;

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required.')
    .min(3, 'Username must be between 3 and 15 characters.')
    .max(15, 'Username must be between 3 and 15 characters.')
    .matches(
      /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      'Wrong pattern',
    ),
});

export const UserProfileForm = () => {
  const [isUsernameValid, setIsUsernameValid] = React.useState<Boolean>(false);
  const { user } = useUserData();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid: isFormValid, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  React.useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  const handleUsernameCheck: FormSubmitHandler = async ({ username }) => {
    const ref = firestore.doc(`usernames/${username}`);
    const { exists } = await ref.get();
    setIsUsernameValid(!exists);
  };

  const handleUsernameSave: FormSubmitHandler = async ({ username }) => {
    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user?.uid}`);
    const usernameDoc = firestore.doc(`usernames/${username}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, {
      username: username,
      photoURL: user?.photoURL,
      displayName: user?.displayName,
    });
    batch.set(usernameDoc, { uid: user?.uid });
  };

  const handleOnChangeUsername = e => {
    setIsUsernameValid(false);
    usernameRegisterField.onChange(e);
  };

  const usernameRegisterField = register('username');

  return (
    <form autoComplete="off" className="form">
      <h3 className="form-title">user profile</h3>
      <div>
        <label htmlFor="email" className="form-label">
          Username
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiAtSign className="w-5 h-5 text-pink-500 dark:text-gray-400" />
          </div>
          <input
            {...usernameRegisterField}
            className="form-input pl-9"
            maxLength={15}
            onChange={handleOnChangeUsername}
            // {...register('username', { onChange: handleOnChangeUsername })}
          />
        </div>
        {errors?.username && (
          <p className="form-label form-label--error">
            {errors.username.message}
          </p>
        )}

        {isUsernameValid && (
          <p className="form-label form-label--success">Username available!</p>
        )}
      </div>

      {(!isUsernameValid || !isFormValid) && (
        <button
          className="form-submit"
          disabled={!isFormValid}
          onClick={handleSubmit(handleUsernameCheck)}
        >
          Check username
        </button>
      )}

      {isUsernameValid && isFormValid && (
        <button
          className="form-submit"
          onClick={handleSubmit(handleUsernameSave)}
        >
          Save
        </button>
      )}
    </form>
  );
};
