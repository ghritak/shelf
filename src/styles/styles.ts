import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  screenHeader: { fontSize: 30, fontWeight: '600', color: 'gray' },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    width: '80%',
    textAlign: 'center',
  },
});
