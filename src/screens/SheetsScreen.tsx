import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Layout from "../templates/Layout";
import { PRIMARY_PALETTE } from "../theme/palette";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SheetsScreen() {
  return (
    <Layout title={<Text style={[styles.title]}>{"Files"}</Text>}>
      <View style={[styles.contentWrapper]}>
        <View style={[styles.tableRow]}>
          <View style={[styles.tableCell]}>
            <Text style={[styles.tableTitle]}>{"File Name"}</Text>
          </View>
          <View style={[styles.tableCell]}>
            <Text style={[styles.tableTitle]}>{"Total"}</Text>
          </View>
        </View>
        <View style={[styles.tableRow]}>
          <View style={[styles.tableCell]}>
            <FontAwesome5
              name="file-csv"
              size={16}
              color={PRIMARY_PALETTE.secondaryText}
              style={[styles.tableContentIcon]}
            />
            <Text style={[styles.tableContent]}>{"fileName"}</Text>
          </View>
          <View style={[styles.tableCell]}>
            <Text style={[styles.tableContent]}>{"10"}</Text>
          </View>
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
  contentWrapper: {
    height: "100%",
    padding: 5,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  tableCell: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: 150,
  },
  tableTitle: {
    fontWeight: "bold",
    color: PRIMARY_PALETTE.primaryText,
  },
  tableContent: {
    color: PRIMARY_PALETTE.secondaryText,
  },
  tableContentIcon: {
    marginRight: 5,
  },
});
