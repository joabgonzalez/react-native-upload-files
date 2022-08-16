import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Layout from "../templates/Layout";
import { PRIMARY_PALETTE } from "../theme/palette";
import { getData, StoreElementType, StoreEnum } from "../utils/storage";

export default function ImagesScreen() {
  const [images, setImages] = useState<StoreElementType[]>([]);

  useEffect(() => {
    (async () => {
      const png = (await getData(StoreEnum.PNG)) as StoreElementType[];
      setImages(png);
    })();
  }, []);

  return (
    <Layout
      title={<Text style={[styles.title]}>{"Gallery"}</Text>}
      withScroll={true}
    >
      <View style={[styles.contentWrapper]}>
        {images?.length ? (
          images.map((image) => (
            <View style={[styles.box]} key={image.name}>
              <Image source={{ uri: image.uri }} style={[styles.image]} />
            </View>
          ))
        ) : (
          <Text>You need upload a new image</Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
    padding: 1,
  },
  box: {
    margin: 1,
    width: 125,
    borderColor: PRIMARY_PALETTE.dividerColor,
    borderWidth: 0.5,
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: "cover",
    backgroundColor: PRIMARY_PALETTE.darkPrimaryColor,
  },
});
