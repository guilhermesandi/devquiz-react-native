import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    marginBottom: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 30,
    color: theme.colors.black,
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 80,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    color: theme.colors.grey,
    width: 257,

    textAlign: 'center',
  },
  challenge: {
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.grey,
    width: 257,

    textAlign: 'center',
  },
  button: {
    flex: 0,
    width: 240,
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
    marginBottom: 20,
  },
  buttonText: {
    color: theme.colors.white,
  },
  backText: {
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.black,
  },
})