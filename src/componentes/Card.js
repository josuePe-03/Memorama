 import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
      onPress={onPress}
    >
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text2}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: "#334155",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d34240",
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 10,
    borderColor: "#334155",
    borderRadius: 30,
    backgroundColor: "#d34240",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign:"center",
  },
  text2: {
    fontSize: 25,
    color: "white",
    textAlign:"center",
  },
});
