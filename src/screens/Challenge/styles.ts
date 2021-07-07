import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    padding: 20,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  informationText: {
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    color: theme.colors.lightGrey,
  },
  progress: {
    borderRadius: 1,
  },

  question: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.black,
    marginBottom: 24,
  },
  answersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,

    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
  },
  answersContainerChecked: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.black,
  },
  answersContainerCorrect: {
    backgroundColor: theme.colors.lightGreen,
    borderColor: theme.colors.green,
  },
  answersContainerIncorrect: {
    backgroundColor: theme.colors.lightRed,
    borderColor: theme.colors.red,
  },
  answersText: {
    flex: 1,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.grey,
  },
  answersTextChecked: {
    color: theme.colors.black,
  },
  answersTextCorrect: {
    color: theme.colors.darkGreen,
  },
  answersTextIncorrect: {
    color: theme.colors.darkRed,
  },
  checkBox: {
    marginLeft: 16,
    width: 24,
    height: 24,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 999,
  },
  checkBoxChecked: {
    borderColor: theme.colors.black,
  },
  checkBoxCorrect: {
    borderColor: theme.colors.darkGreen,
    backgroundColor: theme.colors.darkGreen,
  },
  checkBoxIncorrect: {
    borderColor: theme.colors.darkRed,
    backgroundColor: theme.colors.darkRed,
  },
  
  buttons: {
    flexDirection: 'row',
  },
  skipButton: {
    marginRight: 7,
  },
  confirmButton: {
    backgroundColor: theme.colors.darkGreen,
    borderColor: theme.colors.darkGreen,
  },
  confirmText: {
    color: theme.colors.white,
  },
})