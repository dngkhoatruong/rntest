import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  flexCenter: { justifyContent: 'center', alignItems: 'center' },
  mb15: {
    marginBottom: 15,
  },
  errorText: {
    color: colors.primary,
    marginBottom: 10,
  },
});

export default globalStyles;
