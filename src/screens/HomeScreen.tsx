import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PRIMARY_PALETTE } from "../theme/palette";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Layout from "../templates/Layout";

export default function HomeScreen() {
  return (
    <Layout
      title={<Text style={[styles.title]}>{"Upload Files"}</Text>}
      subtitle={
        <Text style={[styles.subtitle]}>
          <Text>{"You can upload your "}</Text>
          <Text style={[styles.bold]}>{"PNG"}</Text>
          <Text>{" or "}</Text>
          <Text style={[styles.bold]}>{"CSV"}</Text>
          <Text>{" files"}</Text>
        </Text>
      }
      iconButton={
        <MaterialIcons name="add" size={24} color={PRIMARY_PALETTE.textIcons} />
      }
      onPressButton={() => console.log("Upload file")}
    >
      <View style={[styles.contentWrapper]}>
        <View style={[styles.counterWrapper]}>
          <MaterialCommunityIcons
            name="image-multiple"
            size={32}
            color={PRIMARY_PALETTE.accentColor}
            style={[styles.counterIcon]}
          />
          <Text style={[styles.counter]}>{"10"}</Text>
          <Text style={[styles.extension]}>{".png"}</Text>
        </View>
        <View style={[styles.counterWrapper]}>
          <MaterialCommunityIcons
            name="file-document-multiple"
            size={32}
            color={PRIMARY_PALETTE.accentColor}
            style={[styles.counterIcon]}
          />
          <Text style={[styles.counter]}>{"10"}</Text>
          <Text style={[styles.extension]}>{".csv"}</Text>
        </View>
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
  subtitle: {
    fontSize: 14,
    color: PRIMARY_PALETTE.lightPrimaryColor,
  },
  bold: {
    fontWeight: "bold",
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  counterWrapper: {
    borderColor: PRIMARY_PALETTE.accentColor,
    borderWidth: 1,
    height: 125,
    width: 125,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  counterIcon: {
    position: "absolute",
    left: -15,
    top: -10,
    backgroundColor: "white",
  },
  counter: {
    color: PRIMARY_PALETTE.secondaryText,
    fontWeight: "bold",
    fontSize: 50,
  },
  extension: {
    color: PRIMARY_PALETTE.lightPrimaryColor,
    fontSize: 16,
  },
});
