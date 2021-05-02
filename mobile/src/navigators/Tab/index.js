import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import {Home, Repos, Following, Followers, Preview} from '../../screens/index';

import { Icons, Label, Container} from './styles';
import { _Follower, _GitHubTab, _Home } from '../../../constants/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
           screenOptions={ ({route})=>({
               tabBarIcon: ({focused}) => {
                let iconTab = null;

                switch (route.name) {
                    case 'Home':
                        iconTab = _Home;
                    break;
                    case 'Repos':
                        iconTab = _GitHubTab;
                    break;
                    case 'Seguidores':
                        iconTab = _Follower;
                    break;
                    case 'Seguindo':
                        iconTab = _Follower;
                    break;
                }

                return <Icons
                    source={iconTab}
                    style={{
                        tintColor: focused ? '#000000' : '#A5A5A5'
                    }}
                />
               },

               tabBarLabel: ({focused}) => {
                let labelTab = null;

                switch (route.name) {
                    case 'Home':
                        labelTab = 'Home';
                    break;
                    case 'Repos':
                        labelTab = "Repos";
                    break;
                    case 'Seguidores':
                        labelTab = 'Seguidores';
                    break;
                    case 'Seguindo':
                        labelTab = 'Seguindo';
                    break;
                }

                return <Label 
                    style={{
                        color: focused ? '#000000' : '#A5A5A5'
                    }}
                >{labelTab}</Label>
               }
           })
        }
        lazy={true}
        tabBarOptions={{
            style:{
                paddingTop: 15,
                paddingBottom: 10,
                height: 75,
                position:'absolute',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }
        }}
        

        barStyle={{ backgroundColor: '#0000' }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Repos" component={Repos}/>
            <Tab.Screen name="Seguidores" component={Followers}/>
            <Tab.Screen name="Seguindo" component={Following}/>
        </Tab.Navigator>
    );
}

export default Tabs;
