import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image } from "react-native";


function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([
          require("../../assets/startinglocation.png")
        ]);

        // Load fonts
        await Font.loadAsync({
          Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
          RobotoCondensedbold: require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
          RobotoCondensedlight: require("../../assets/fonts/RobotoCondensed-Light.ttf"),
          Robotomid: require("../../assets/fonts/Roboto-Medium.ttf"),
          RobotoCondensedregular: require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
        });

        // load images
        await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
