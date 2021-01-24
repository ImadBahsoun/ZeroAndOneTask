import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
});
