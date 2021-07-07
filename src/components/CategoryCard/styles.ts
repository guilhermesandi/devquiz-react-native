import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 32,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderRadius: 28,
    overflow: 'hidden',
  },
  button: {
    width: 80,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontFamily: theme.fonts.title700,
  },
})