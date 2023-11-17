import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "LandingScreen">;

const LandingScreen: React.FC<Props> = ({ navigation }) => {
	const [timer, setTimer] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			// Navigate to another screen after 5 seconds
			navigation.replace("LoginScreen");
		}
	}, [timer, navigation]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is The Landing Screen</Text>
			<Text style={styles.timer}>Timer: {timer}s</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 20,
	},
	timer: {
		fontSize: 18,
	},
});

export default LandingScreen;
