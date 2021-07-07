import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 136,
    backgroundColor: theme.colors.white,
    marginHorizontal: 20,
    marginTop: -33,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  score: {
    flex: 1,
  },
  scoreText: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.black,
    fontSize: 18,
  },
  textContainer: {
    flex: 3,
    paddingLeft: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.black,
    marginBottom: 8,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.grey,
  },
})