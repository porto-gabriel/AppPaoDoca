import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF4',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#6B3B1D',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 36,
    textAlign: 'center',
    color: '#6B3B1D',
  },

  label: {
    marginBottom: 6,
    fontWeight: '600',
    color: '#6B3B1D',
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 18,
  },

  passwordInput: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 22,
  },

  button: {
    height: 52,
    backgroundColor: '#6B3B1D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;