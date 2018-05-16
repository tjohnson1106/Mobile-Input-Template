import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Touc
} from "react-native";

import Touchable from "@appandflow/touchable";

class Main extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notes</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.addButton}>
          <Touchable feedback="opacity">
            <Text style={styles.addButtonText}>+</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },

  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    height: 70,
    width: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});

export default Main;
