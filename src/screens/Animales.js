import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text,SafeAreaView,Image } from "react-native";

export default function Animales({ navigation }) {

  const PlaceholderImage = require('../assets/animal.png');

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Memory by animals</Text>
      </View>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Nevel:</Text>
        <View style={styles.botones}>
          <Button
            title="Facil"
            color="#f194ff"
            onPress={() => navigation.navigate("AnimalesF")}
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
  image: {
    width:338,
    height:319
  }
});
