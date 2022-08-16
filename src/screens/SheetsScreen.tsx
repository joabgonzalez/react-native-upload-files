import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Layout from "../templates/Layout";
import { PRIMARY_PALETTE } from "../theme/palette";
import { FontAwesome5 } from "@expo/vector-icons";
import { getData, StoreElementType, StoreEnum } from "../utils/storage";

export default function SheetsScreen() {
  const [documents, setDocuments] = useState<StoreElementType[]>([]);

  useEffect(() => {
    (async () => {
      const csv = (await getData(StoreEnum.CSV)) as StoreElementType[];
      setDocuments(csv);
    })();
  }, []);

  return (
    <Layout title={<Text style={[styles.title]}>{"Files"}</Text>}>
      <View style={[styles.contentWrapper]}>
        {documents?.length ? (
          <>
            <View style={[styles.tableRow]}>
              <View style={[styles.tableCell]}>
                <Text style={[styles.tableTitle]}>{"File Name"}</Text>
              </View>
              <View style={[styles.tableCell]}>
                <Text style={[styles.tableTitle]}>{"Total"}</Text>
              </View>
            </View>
            {documents.map((document) => (
              <View style={[styles.tableRow]} key={document.name}>
                <View style={[styles.tableCell]}>
                  <FontAwesome5
                    name="file-csv"
                    size={16}
                    color={PRIMARY_PALETTE.secondaryText}
                    style={[styles.tableContentIcon]}
                  />
                  <Text style={[styles.tableContent]}>{document.name}</Text>
                </View>
                <View style={[styles.tableCell]}>
                  <Text style={[styles.tableContent]}>{document.total}</Text>
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text>{"You need upload a document"}</Text>
        )}
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
