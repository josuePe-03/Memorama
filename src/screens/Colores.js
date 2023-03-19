import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text,SafeAreaView,Image } from "react-native";

export default function Colores({ navigation }) {
  const PlaceholderImage = require('../assets/colores2.png');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Memory by colors</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Nevel:</Text>
        <View style={styles.botones}>
          <Button
            title="Facil"
            color="#f194ff"
            onPress={() => navigation.navigate("ColoresF")}
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
    alignItems: "center"
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
 
  },
  image: {
    width: 340,
    height: 340,
    borderRadius: 18,
    marginVertical:20
  },
});
