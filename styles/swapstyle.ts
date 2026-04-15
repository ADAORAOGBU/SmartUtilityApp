import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 10,
  },
  cardContainer: { position: "relative", width: "100%", marginTop: 50 },

  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#8338EC",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  textInput: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1E293B",
    padding: 0,
  },

  swapCircle: {
    backgroundColor: "#8338EC",
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 10,
    marginVertical: -30,
    borderWidth: 4,
    borderColor: "#F8F9FA",
  },
  hint: {
    textAlign: "center",
    marginTop: 30,
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "500",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1E293B",
    letterSpacing: 1,
  },

  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 30,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    height: 90,
    justifyContent: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: { elevation: 4 },
    }),
  },

  inputValue: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1E293B",
    padding: 0,
    height: 60,
    paddingVertical: 5,
  },

  resultValue: {
    fontSize: 32, //
    fontWeight: "700",
    color: "#8338EC",
    height: 40, //
  },

  resultBox: {
    backgroundColor: "#F1F5F9",
    borderColor: "#CBD5E1",
    marginTop: 10,
    height: 90,
  },
});
export default styles;
