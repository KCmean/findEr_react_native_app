import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";   
import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync()


const Layout = () => {
    
    const [fontsIsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsIsLoaded){
            await SplashScreen.hideAsync()
        }
    }, [fontsIsLoaded])

    if(!fontsIsLoaded) return null;

    return <Stack onlayout =  {onLayoutRootView} /> 
}

export default Layout;