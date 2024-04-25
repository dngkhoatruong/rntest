import { Text, TextProps } from 'react-native';
import React from 'react';
import globalStyles from '../../constants/globalStyles';

interface CustomErrorMessageProps extends TextProps {
  text: string;
}

const CustomErrorMessage = ({ text }: CustomErrorMessageProps) => {
  return <Text style={globalStyles.errorText}>{text}</Text>;
};

export default CustomErrorMessage;
