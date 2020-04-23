import React from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from "react-native";
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import Questions from "./src/screens/Questions";
import Home from "./src/screens/Home";

export default class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <BackButton />
          <Route path='/questions' component = {Questions} />
          <Route exact path='/' component = {Home} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: 20,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold"
  },

  info: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});