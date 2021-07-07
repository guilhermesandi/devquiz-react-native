import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: '100%',
    height: 194,
    paddingHorizontal: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 35,
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.text400,
    fontSize: 24,
    color: theme.colors.white,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.white,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.avatarBorder,
  },

  levelsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24,
  },
  level: {
    width: 80,
    height: 32,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    fontFamily: theme.fonts.title700,
  },

  challengeContainer: {
    marginHorizontal: 20,
  },
})