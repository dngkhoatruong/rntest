import { View, Text, TouchableOpacity, TextInputProps } from 'react-native';
import React, { useMemo } from 'react';
import useSignin from './useSignIn';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import CustomFormInput from '../../components/CustomFormInput';
import withForm from '../../HOCS/withForm';
import CustomButton from '../../components/CustomButton';

export default function SignIn({ navigation }) {
  const { control, onPressLogin } = useSignin();

  const renderTitle = useMemo(() => {
    return (
      <View style={globalStyles.flexCenter}>
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
      </View>
    );
  }, []);

  const InputUserName = withForm<TextInputProps>({
    name: 'userName',
    control,
    WrappedComponent: CustomFormInput,
  });

  const InputPassword = withForm<TextInputProps>({
    name: 'password',
    control,
    WrappedComponent: CustomFormInput,
  });

  return (
    <View style={styles.container}>
      <View style={styles.signinForm}>
        {renderTitle}
        <View>
          <Text style={globalStyles.mb15}>Đăng nhập hệ thống</Text>
          <InputUserName style={styles.input} placeholder="User name" />
          <InputPassword style={styles.input} placeholder="Password" />
          <CustomButton
            text="ĐĂNG NHẬP"
            containerStyle={styles.submitBtn}
            onPress={onPressLogin}
          />
        </View>
      </View>
    </View>
  );
}
