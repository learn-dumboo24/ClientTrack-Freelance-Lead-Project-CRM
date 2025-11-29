import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </Text>
        </View>
        <Text style={styles.name}>{user?.name || "User"}</Text>
        <Text style={styles.email}>{user?.email || ""}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDF5",
    padding: 20,
  },
  profileCard: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#5B6ABF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    color: "#2A3266",
    fontWeight: "700",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  logoutButton: {
    backgroundColor: "#5B6ABF",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#5B6ABF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

