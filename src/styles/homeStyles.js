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
    marginBottom: 32,
  },

  menu: {
    gap: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 12,
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6B3B1D',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 14,
    color: '#7A6A60',
  },
});

export default styles;