import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DocumentPicker from "react-native-document-picker";

import { PRIMARY_PALETTE } from "../theme/palette";
import Layout from "../templates/Layout";
import {
  clearData,
  getData,
  storeData,
  StoreElementType,
  StoreEnum,
} from "../utils/storage";

export default function HomeScreen() {
  const [images, setImages] = useState<StoreElementType[]>([]);
  const [documents, setDocuments] = useState<StoreElementType[]>([]);

  useEffect(() => {
    (async () => {
      const png = (await getData(StoreEnum.PNG)) as StoreElementType[];
      setImages(png);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const csv = (await getData(StoreEnum.CSV)) as StoreElementType[];
      setDocuments(csv);
    })();
  }, []);

  const pickerHandler = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: "pageSheet",
        type: ["text/comma-separated-values", "text/csv", "image/png"],
      });

      const { name, type, uri } = response;
      switch (type) {
        case "text/comma-separated-values":
        case "text/csv":
          const csv = await storeData(StoreEnum.CSV, { name, uri, total: 120 });
          setDocuments(csv as StoreElementType[]);

          break;
        case "image/png":
          const png = await storeData(StoreEnum.PNG, { name, uri });
          setImages(png as StoreElementType[]);
          break;
        default:
          console.error("invalid file");
          break;
      }
    } catch (error) {
      console.error("something went wrong");
    }
  };

  return (
    <Layout
      title={<Text style={[styles.title]}>{"Upload Files"}</Text>}
      subtitle={
        <Text style={[styles.subtitle]}>
          <Text>{"You can upload your files"}</Text>
        </Text>
      }
      iconButton={
        <MaterialIcons name="add" size={24} color={PRIMARY_PALETTE.textIcons} />
      }
      onPressButton={() => {
        // clearData();
        pickerHandler();
      }}
    >
      <View style={[styles.contentWrapper]}>
        <View style={[styles.counterWrapper]}>
          <MaterialCommunityIcons
            name="image-multiple"
            size={32}
            color={PRIMARY_PALETTE.accentColor}
            style={[styles.counterIcon]}
          />
          <Text style={[styles.counter]}>{images.length}</Text>
          <Text style={[styles.extension]}>{"images"}</Text>
        </View>
        <View style={[styles.counterWrapper]}>
          <MaterialCommunityIcons
            name="file-document-multiple"
            size={32}
            color={PRIMARY_PALETTE.accentColor}
            style={[styles.counterIcon]}
          />
          <Text style={[styles.counter]}>{documents.length}</Text>
          <Text style={[styles.extension]}>{"documents"}</Text>
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
