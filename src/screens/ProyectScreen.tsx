import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet } from "react-native";
import { TabStackParamList } from "../../App";

type Props = NativeStackScreenProps<TabStackParamList, "ProyectScreen">;

const ProyectScreen: React.FC<Props> = ({ navigation }) => {
	const handleDoSomething = () => {
		alert("Doing Something");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Welcome to Proyect Screen</Text>
			<Button title="Do something" onPress={handleDoSomething} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	header: {
		fontSize: 24,
		marginBottom: 24,
	},
});

export default ProyectScreen;
