import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text,SafeAreaView,Image } from "react-native";


export default function HomeScreen({ navigation }) {

  const PlaceholderImage = require('../assets/logo.png');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Memory 🃏🃏</Text>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Theme:</Text>
        <View style={styles.botones}>
          <Button
            title="Animales 🐊"
            color="#f194ff"
            onPress={() => navigation.navigate("Animales")}
          />
        </View>
        <View style={styles.botones}>
          <Button
            title="Figuras ◼"
            color="#f194ff"
            onPress={() => navigation.navigate("Figuras")}
          />
        </View>
        <View style={styles.botones}>
          <Button
            title="Colores ⚪"
            color="#f194ff"
            onPress={() => navigation.navigate("Colores")}
          />
        </View>
        <View style={styles.botones}>
          <Button
            title="Cosas 🪨"
            color="#f194ff"
            onPress={() => navigation.navigate("Cosas")}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",

  },
  container1: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",

  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
    marginVertical: 35,
  },
  botones:{
   marginBottom:14
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    borderRadius: 18,
  },
});
