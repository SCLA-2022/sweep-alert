import { useEffect, useState } from "react";
import * as Location from "expo-location";

/**
 * Checks if app has user permission to access geo location and returns
 * the user's coordinates
 * 
 * If the app does not have the user's permission, a dialog is displayed which
 * requests the user's permission.
 * 
 * If the user had denied permission, a error message is displayed
 * @returns 
 */
export default function useCurrentLocation() {
  const [location, setLocation] = useState<Location.LocationObject|null>(null);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return {
    location, error
  };
}
