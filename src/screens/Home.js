import React from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from "react-native";
import { Link } from "react-router-native";
import { Ionicons } from "@expo/vector-icons";
import Questions from "./Questions";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 150 }}
        />
        <Text style={styles.header}>True or False [IT]</Text>
        <Text style={styles.info}>
			Play a quiz. There will be 10 questions. Questions are downloaded via the API.
        </Text>
        <Link to={`Questions`} style={styles.button} underlayColor="#f0f4f7">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="md-play" size={35} color="white" />
            <Text
              style={{
                color: "white",
				fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 5
              }}
            >
              Start
            </Text>
          </View>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccff",
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "white",
    padding: 15
  },

  info: {
    fontSize: 20,
	fontWeight: "bold",
    color: "#3232CD",
    textAlign: "center",
    padding: 10,
    marginTop: 10,
	marginBottom: 10
  },
  
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 20
  },
  
  aboutbutton: {
	backgroundColor: "#3498db",
    padding: 15,
	marginTop: 10,
    borderRadius: 20
  }
});
