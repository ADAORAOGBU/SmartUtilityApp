import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: "900", color: "#1E293B" },
  inputRow: { flexDirection: "row", paddingHorizontal: 20, marginBottom: 10 },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  addBtn: {
    backgroundColor: "#8338EC",
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#F8F9FA",
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1E293B",
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8338EC",
    marginTop: 4,
  },
  backButton: {
    paddingTop: 5,
  },

  // EMPTY STATE STYLES

  iconBackground: {
    padding: 30,
    borderRadius: 50,
    backgroundColor: "#F1F5F9", // Faint grey circle
    marginBottom: 30,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    paddingHorizontal: 40,
  },
  illustrationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  glowCircle: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#8338EC",
    opacity: 0.05, // Very subtle purple glow behind the icon
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1E293B",
    marginTop: 10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 24,
  },
});
export default styles;
