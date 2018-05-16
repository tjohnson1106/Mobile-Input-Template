import React, { Component } from "react";
import { StyleSheet, Text, View, Touchable } from "react-native";
import Touchable from "@appandflow/touchable";

import Note from "./Note";

class Note extends Component {
  render() {
    return (
      <View key={this.props.keyvalue} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date} </Text>
        <Text style={styles.noteText}>{this.props.val.note} </Text>

        <Touchable
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>{}</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },

  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91E63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
});

export default Note;
