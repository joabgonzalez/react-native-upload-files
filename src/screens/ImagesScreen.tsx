import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Layout from "../templates/Layout";
import { PRIMARY_PALETTE } from "../theme/palette";

export default function ImagesScreen() {
  return (
    <Layout
      title={<Text style={[styles.title]}>{"Gallery"}</Text>}
      withScroll={true}
    >
      <View style={[styles.contentWrapper]}>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
        <View style={[styles.box]}></View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: PRIMARY_PALETTE.textIcons,
  },
  contentWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
    padding: 1,
  },
  box: {
    margin: 1,
    width: 125,
    height: 125,
    borderColor: PRIMARY_PALETTE.dividerColor,
    borderWidth: 0.5,
  },
});
