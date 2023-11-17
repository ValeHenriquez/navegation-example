import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Aquí puedes agregar lógica de autenticación
		// Por ahora, simplemente navegaré a otra pantalla al presionar el botón de inicio de sesión
		navigation.replace("TabScreenStack");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
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
	input: {
		height: 40,
		width: "80%",
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
	},
	button: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});

export default LoginScreen;
