import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text,SafeAreaView,Image } from "react-native";

export default function Figuras({ navigation }) {
  const PlaceholderImage = require('../assets/figura.png');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Memory by figurs</Text>
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
            onPress={() => navigation.navigate("FigurasF")}
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
    marginVertical:50,
    backgroundColor: "#0f172a",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
  },
  botones:{
   marginBottom:14
  },
  image: {
    width: 230,
    height: 358,
    borderRadius: 18,
    
  },
});
