import React  from "react";
import {View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminLogin from "./admin";
import ViewPresent from "./ViewPresent";

const Tab = createBottomTabNavigator();
function Tabs() {
    return(
        <Tab.Navigator >
            <Tab.Screen name="ViewPresent" component={ViewPresent} />
            <Tab.Screen name="Logout" component={AdminLogin} />
            
        </Tab.Navigator>
    )
}

export default function TabRouter() {
        return(
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        )    
}