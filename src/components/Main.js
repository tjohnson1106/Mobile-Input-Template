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

import Note from "./Note";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ""
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notes</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.addButton}>
          <Touchable
            feedback="opacity"
            onPress={this.addNote.bind(this)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </Touchable>
        </View>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date:
          d.getFullYear() +
          "/" +
          (d.getMonth() + 1) +
          "/" +
          d.getDate(),
        note: this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({
      noteArray: this.state.noteArray
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDBDBD"
  },
  header: {
    backgroundColor: "#303F9F",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 19,
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
    backgroundColor: "#303F9F",
    height: 70,
    width: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#303f9f"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 26
  }
});

export default Main;
