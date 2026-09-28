import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF4',
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6B3B1D',
  },

  subtitle: {
    fontSize: 15,
    color: '#7A6A60',
    marginTop: 4,
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B3B1D',
    marginBottom: 6,
  },

  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 18,
  },

  saveButton: {
    height: 52,
    backgroundColor: '#6B3B1D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  cancelButton: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  cancelButtonText: {
    color: '#6B3B1D',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;