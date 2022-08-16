import AsyncStorage from "@react-native-async-storage/async-storage";

export enum StoreEnum {
  CSV = "@text/csv",
  PNG = "@image/png",
}

export interface StoreElementType {
  name: string;
  uri: string;
  total?: number;
}

export const storeData = async (type: StoreEnum, value: StoreElementType) => {
  try {
    const data: StoreElementType[] = (await getData(
      type
    )) as StoreElementType[];
    let jsonValue: string = "";
    if (!!data?.length) {
      jsonValue = JSON.stringify([...data, value]);
    } else {
      jsonValue = JSON.stringify([value]);
    }
    await AsyncStorage.setItem(type, jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("saving error", error);
  }
};

export const getData = async (type: StoreEnum) => {
  try {
    const jsonValue = await AsyncStorage.getItem(type);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("error reading value", error);
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("error deleting data", error);
  }
};
