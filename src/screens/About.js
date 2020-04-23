import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator
} from "react-native";
import Home from "./Home";
import { Link } from "react-router-native";
import { Ionicons } from "@expo/vector-icons";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Author: SqrtLewy</Text>
        <Text style={styles.info}>
			Application made in react native.
        </Text>
        <Link to={`/`} style={styles.button} underlayColor="#f0f4f7">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="md-arrow-dropleft" size={35} color="white" />
            <Text
              style={{
                color: "white",
				fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 5
              }}
            >
              Back
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
  }
});