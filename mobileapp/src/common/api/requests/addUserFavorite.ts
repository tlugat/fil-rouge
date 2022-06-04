import config from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_HOST, API_ROUTES } from "../routes";

export default async function addUserFavorite(assos_id: string): Promise<any> {
  const userToken = await AsyncStorage.getItem("userToken");
  const bearer = "Bearer" + " " + userToken;

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    app_id: config.APP_ID,
    Authorization: bearer,
  });

  fetch(`${API_HOST}${API_ROUTES.USER_FAVORITES(assos_id)}`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(assos_id),
  });
}
