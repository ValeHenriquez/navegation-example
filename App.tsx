import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ProyectScreen from "./src/screens/ProyectScreen";
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { StatusBar } from "react-native";
import { Icon } from "@rneui/base";


const tabBarOptions = {
	headerShown: false,
	tabBarLabelStyle: { fontSize: 12 },
	tabBarActiveTintColor: "red",
	tabBarInactiveTintColor: "pink",
};

export type RootStackParamList = {
	LandingScreen: undefined;
	LoginScreen: undefined;
	TabScreenStack: undefined;
};

export type TabStackParamList = {
	HomeScreen: undefined;
	ProyectScreen: undefined;
	ProfileScreen: undefined;
	LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const getTabScreenOptions = (iconName: string, tabBarLabel: string) => {
	return {
		tabBarIcon: ({ color, size }: { color: string; size: number }) => (
			<Icon name={iconName} color={color} size={size} />
		),
		tabBarLabel,
		...tabBarOptions,
	};
};

const TabScreenStack = () => {
	return (
		<Tab.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={getTabScreenOptions("home", "Home")}
			/>
			<Tab.Screen
				name="ProyectScreen"
				component={ProyectScreen}
				options={getTabScreenOptions("list", "Proyect")}
			/>
			<Tab.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={getTabScreenOptions("face", "Profile")}
			/>
		</Tab.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="default" />
			<Stack.Navigator
				initialRouteName="LandingScreen"
				screenOptions={{ headerShown: false, gestureEnabled: false }}
			>
				<Stack.Screen name="LandingScreen" component={LandingScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="TabScreenStack" component={TabScreenStack} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
