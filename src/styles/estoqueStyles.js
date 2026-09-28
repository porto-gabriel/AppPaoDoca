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
    marginBottom: 24,
  },

  search: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
  },

  filters: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
  },

  filterButton: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDDBAB',
  },

  filterActive: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#6B3B1D',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B3B1D',
  },

  filterActiveText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  listHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: 10,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6B3B1D',
  },

  addText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B3B1D',
  },

  list: {
    paddingBottom: 30,
  },

  productRow: {
    minHeight: 72,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFE6D8',
    paddingHorizontal: 14,
    paddingVertical: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#402719',
    marginBottom: 5,
  },

  quantity: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B3B1D',
    marginLeft: 16,
  },

  statusNormal: {
    fontSize: 12,
    color: '#547A45',
  },

  statusBaixo: {
    fontSize: 12,
    color: '#B37424',
  },

  statusFalta: {
    fontSize: 12,
    color: '#A34A32',
  },

  emptyText: {
  textAlign: 'center',
  marginTop: 30,
  fontSize: 14,
  color: '#7A6A60',
  },
  
  quantityHeader: {
  alignItems: 'flex-end',
  },

  quantityTitle: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '700',
  color: '#6B3B1D',
  },

});

export default styles;