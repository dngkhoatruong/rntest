import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signinForm: {
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: 'white',
  },
  title: { fontSize: 38, fontWeight: 'bold' },
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
    color: 'white',
    marginTop: 15,
    alignSelf: 'flex-end',
  },
});

export default styles;
