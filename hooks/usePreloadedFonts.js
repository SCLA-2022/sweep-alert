import {useEffect, useState} from 'react';
import * as SplashScreen from "expo-splash-screen";
import * as Font from 'expo-font';
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from "@expo-google-fonts/roboto";
  import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  } from '@expo-google-fonts/roboto-condensed';
  import {
    RobotoMono_100Thin,
    RobotoMono_200ExtraLight,
    RobotoMono_300Light,
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
    RobotoMono_100Thin_Italic,
    RobotoMono_200ExtraLight_Italic,
    RobotoMono_300Light_Italic,
    RobotoMono_400Regular_Italic,
    RobotoMono_500Medium_Italic,
    RobotoMono_600SemiBold_Italic,
    RobotoMono_700Bold_Italic,
  } from '@expo-google-fonts/roboto-mono';
  
export default function usePreloadedFonts(){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            async function loadFonts(){
                try{
                   

                    await Font.loadAsync({
                        Roboto_100Thin,
                        Roboto_100Thin_Italic,
                        Roboto_300Light,
                        Roboto_300Light_Italic,
                        Roboto_400Regular,
                        Roboto_400Regular_Italic,
                        Roboto_500Medium,
                        Roboto_500Medium_Italic,
                        Roboto_700Bold,
                        Roboto_700Bold_Italic,
                        Roboto_900Black,
                        Roboto_900Black_Italic,
                        RobotoCondensed_700Bold,
                        RobotoMono_600SemiBold,
                    });

                    setIsLoading(false);
                 
                }catch(e){
                    console.log(e)
                }
            }

            loadFonts();
    }, [])

    return {
        isLoading
    }
}
