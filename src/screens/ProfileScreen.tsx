import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet } from "react-native";
import { TabStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";

type Props = NativeStackScreenProps<TabStackParamList, "ProfileScreen">;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
	const handleDoSomething = () => {
		alert("Doing Something");
	};

	const handleLogout = () => {
		alert("Logout");
		navigation.navigate("LoginScreen");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Icon
					iconStyle={styles.iconStyle}
					name="logout"
					type="material"
					onPress={handleLogout}
				/>
			</View>
			<Text style={styles.titleStyle}>Welcome to Profile Screen</Text>
			<Button title="Do something" onPress={handleDoSomething} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: "8%",
		width: "100%",
		flexDirection: "row",
		backgroundColor: "orange",
	},
	iconStyle: {
		padding: "4%",
		fontSize: 24,
		color: "white",
	},
	titleStyle: {
		paddingLeft: "5%",
		paddingTop: "3%",
		fontSize: 24,
		color: "black",
		fontWeight: "bold",
	},
});

export default ProfileScreen;
