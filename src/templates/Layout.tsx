import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactElement } from "react";

import { PRIMARY_PALETTE } from "../theme/palette";

interface Props {
  title: ReactElement<Text, string>;
  subtitle?: ReactElement<Text, string>;
  children: ReactElement<any, any> | ReactElement<any, any>[];
  iconButton?: ReactElement<any, any>;
  onPressButton?: () => void;
  withScroll?: boolean;
}

export default function Layout(props: Props) {
  const { title, subtitle, children, iconButton, onPressButton, withScroll } =
    props;
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.headerWrapper]}>
        {title}
        {!!subtitle && subtitle}
      </View>
      <View style={[styles.contentWrapper]}>
        {!!iconButton && (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => !!onPressButton && onPressButton()}
          >
            {iconButton}
          </TouchableOpacity>
        )}
        {withScroll ? <ScrollView>{children}</ScrollView> : <>{children}</>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_PALETTE.darkPrimaryColor,
    justifyContent: "space-between",
  },
  headerWrapper: {
    justifyContent: "center",
    height: "25%",
    paddingLeft: 25,
    backgroundColor: PRIMARY_PALETTE.primaryColor,
  },
  button: {
    position: "absolute",
    top: -28,
    right: 25,
    padding: 15,
    borderRadius: 50,
    backgroundColor: PRIMARY_PALETTE.accentColor,
    zIndex: 10,
  },
  contentWrapper: {
    backgroundColor: "white",
    height: "75%",
  },
});
