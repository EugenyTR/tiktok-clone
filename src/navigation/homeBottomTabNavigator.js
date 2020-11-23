import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000',
            },
            activeTintColor: '#fff',
        }}>
            <Tab.Screen
                name={'Главная'}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name={'home'} size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Поиск'}
                component={() => <Text>Поиск</Text>}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name={'search1'} size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Загрузить'}
                component={Home}
                options={{
                    tabBarIcon: ({}) => (
                        <Image source={plusIcon} style={{height: 30, resizeMode: 'contain'}} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name={'Сообщение'}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name={'message1'} size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Профиль'}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name={'ios-person-outline'} size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

export default HomeBottomTabNavigator;
