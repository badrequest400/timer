import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    width: 50,
    paddingRight: 20,
    paddingLeft: 40,
  },
  picker: {
    flexGrow: 1,
    width: 50,
    paddingRight: 40,
    paddingLeft: 20,
  },
});
