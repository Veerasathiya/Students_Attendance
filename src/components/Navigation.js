import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentList from './stdList';
import AdminLogin from './admin';
import StartScreen from './StartScreen';
import StdLogin from './stdLogin';
import ViewPresent from './ViewPresent';
import StudentJoin from './joinClass';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="StartScreen" >
                <Stack.Screen name="StartScreen" component={StartScreen}  />
                <Stack.Screen name="AdminLogin" component={AdminLogin}  />
                <Stack.Screen name="StudentList" component={StudentList} options={{headerShown : true}} />
                <Stack.Screen name="StdLogin" component={StdLogin} />
                <Stack.Screen name="ViewPresent" component={ViewPresent} />
                <Stack.Screen name="StudentJoin" component={StudentJoin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}