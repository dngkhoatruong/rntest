import {
  ActivityIndicator,
  TouchableOpacity,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { text, textStyle, containerStyle, isLoading, ...otherProps } = props;
  return (
    <View style={containerStyle}>
      {isLoading ? (
        <ActivityIndicator size={'small'} animating />
      ) : (
        <TouchableOpacity {...otherProps}>
          <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomButton;
