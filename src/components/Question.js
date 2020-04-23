import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  renderOptions = question => {
    if (question.type === "boolean") {
      return [
        <RadioButton value={"True"} key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value={"False"} key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    }
  };

  render() {
    return (
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 16, color: "gray", textAlign: "right" }}>
          {this.props.current + 1} out of 10
        </Text>

        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#3498db" }}>
          {this.props.question.question}
        </Text>
		
        <RadioGroup
          onSelect={(index, answer) => this.setState({ answer })}
          selectedIndex={null}
        >
          {this.renderOptions(this.props.question)}
        </RadioGroup>

        <Button
          title="Submit answer"
		  color="#3498db"
          onPress={() => {
            this.props.onSelect(this.state.answer);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 15,
	fontWeight: 'bold',
	color: 'blue'
  }
});
