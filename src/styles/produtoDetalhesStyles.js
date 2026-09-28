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
    marginBottom: 28,
  },

  infoBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 28,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },

  label: {
    fontSize: 14,
    color: '#7A6A60',
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#402719',
  },

  divider: {
    height: 1,
    backgroundColor: '#EFE6D8',
  },

  primaryButton: {
    height: 52,
    backgroundColor: '#6B3B1D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#6B3B1D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: '#6B3B1D',
    fontSize: 16,
    fontWeight: '600',
  },

  deleteButton: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A34A32',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  deleteButtonText: {
    color: '#A34A32',
    fontSize: 16,
    fontWeight: '600',
  },

  backButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },

  backButtonText: {
    color: '#7A6A60',
    fontSize: 14,
  },
});

export default styles;