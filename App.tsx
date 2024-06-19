import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSearch,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';

// Add icons to the library
library.add(faHome, faSearch, faEnvelope, faUser);

// Define the screen parameters
type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Message: undefined;
  Profile: undefined;
};

// Create bottom tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();

// Define screen options for tab navigator
const screenOptions = ({route}: {route: {name: string}}) => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let iconName: string;

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'home' : 'home';
        break;
      case 'Search':
        iconName = focused ? 'search' : 'search';
        break;
      case 'Message':
        iconName = focused ? 'envelope' : 'envelope';
        break;
      case 'Profile':
        iconName = focused ? 'user' : 'user';
        break;
      default:
        iconName = 'help-circle';
        break;
    }

    // Return the FontAwesomeIcon component
    return <FontAwesomeIcon icon={iconName as any} size={size} color={color} />;
  },
  tabBarShowLabel: false,
});

// Main app component
const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
