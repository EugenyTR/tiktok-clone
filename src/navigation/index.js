import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from "./homeBottomTabNavigator";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator options={{
                headerShow: false,
                headerStyle: {
                    backgroundColor: '#000',
                }
            }}>
                <Stack.Screen name="Главная" component={HomeBottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
