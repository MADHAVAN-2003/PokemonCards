import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PokemonCards from "./Components/PokemonCards";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
