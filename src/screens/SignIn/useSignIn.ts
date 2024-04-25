import AsyncStorage from '@react-native-async-storage/async-storage';
import { FieldErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type LoginForm = {
  userName: string;
  password: string;
};

const loginSchema = yup
  .object()
  .shape({
    userName: yup.string().required('User name is required!'),
    password: yup.string().required('Password name is required!'),
  })
  .required();

const useSignin = () => {
  const { control, handleSubmit } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (form: LoginForm) => {
    try {
      // Perform login logic here
      console.log('Login data:', form);
      await AsyncStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const onPressLogin = handleSubmit(onSubmit);

  return { control, onPressLogin };
};

export default useSignin;
