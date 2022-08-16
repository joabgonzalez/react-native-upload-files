import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ImagesScreen from "../screens/ImagesScreen";
import SheetsScreen from "../screens/SheetsScreen";
import { PRIMARY_PALETTE } from "../theme/palette";

export type RootTabNavParamList = {
  Home: undefined;
  Images: undefined;
  Sheets: undefined;
};

const RootTab = createBottomTabNavigator<RootTabNavParamList>();

export default function RootTabNav() {
  return (
    <RootTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: PRIMARY_PALETTE.primaryColor,
          paddingTop: 10,
        },
      }}
    >
      <RootTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY_PALETTE.textIcons,
          tabBarInactiveTintColor: PRIMARY_PALETTE.lightPrimaryColor,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="ios-home"
                size={24}
                color={PRIMARY_PALETTE.textIcons}
              />
            ) : (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={PRIMARY_PALETTE.lightPrimaryColor}
              />
            ),
        }}
      />
      <RootTab.Screen
        name="Images"
        component={ImagesScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY_PALETTE.textIcons,
          tabBarInactiveTintColor: PRIMARY_PALETTE.lightPrimaryColor,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="image-multiple"
                size={24}
                color={PRIMARY_PALETTE.textIcons}
              />
            ) : (
              <MaterialCommunityIcons
                name="image-multiple-outline"
                size={24}
                color={PRIMARY_PALETTE.lightPrimaryColor}
              />
            ),
        }}
      />
      <RootTab.Screen
        name="Sheets"
        component={SheetsScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY_PALETTE.textIcons,
          tabBarInactiveTintColor: PRIMARY_PALETTE.lightPrimaryColor,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="file-document-multiple"
                size={24}
                color={PRIMARY_PALETTE.textIcons}
              />
            ) : (
              <MaterialCommunityIcons
                name="file-document-multiple-outline"
                size={24}
                color={PRIMARY_PALETTE.lightPrimaryColor}
              />
            ),
        }}
      />
    </RootTab.Navigator>
  );
}
