import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconCorrectContainer: {
    width: 90,
    height: 90,
    marginBottom: 55,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 5,
    borderColor: theme.colors.darkGreen,
    borderRadius: 999,
  },
  iconIncorrectContainer: {
    width: 90,
    height: 90,
    marginBottom: 55,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 5,
    borderColor: theme.colors.erro,
    borderRadius: 999,
  },

  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 30,
    color: theme.colors.black,
    marginBottom: 16,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    color: theme.colors.grey,
    marginBottom: 56,
    width: 257,

    textAlign: 'center',
  },
  button: {
    flex: 0,
    width: 180,
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
  buttonText: {
    color: theme.colors.white,
  }
})