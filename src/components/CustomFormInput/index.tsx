import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface CustomFormInputProps extends TextInputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value?: any;
}

const CustomFormInput = (props: CustomFormInputProps) => {
  const { onChange, onBlur, value, ...otherProps } = props;
  return (
    <TextInput
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      {...otherProps}
    />
  );
};

export default CustomFormInput;
