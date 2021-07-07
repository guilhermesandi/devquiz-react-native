import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    width: 160,
    marginRight: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  button: {
    padding: 16,
    height: 184,
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    color: theme.colors.black,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    marginTop: 24,
    marginBottom: 24,
  },
  challenge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.lightGrey,
    fontSize: 11,
    fontFamily: theme.fonts.text400,
    marginRight: 21,
  },
  progress: {
    borderRadius: 1,
    flex: 1,
  },
})