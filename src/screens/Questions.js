import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Picker, Button } from "react-native";
import { Link } from "react-router-native";
import Question from "../components/Question";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questions: [],

      current: 0,
      correctScore: 10,
      totalScore: 100,

      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }

  fetchQuestions = async () => {
    await this.setState({ loading: true });
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=18&type=boolean`
    );
    const questions = await response.json();

    const { results } = questions;

    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    await this.setState({ questions: results, loading: false });
  };

  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };

    results.score = isCorrect ? results.score + 10 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({
      current: index + 1,
      results,
      completed: index === 9 ? true : false
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="blue" />
            <Text>Question draw... Please wait...</Text>
          </View>
        )}

        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 30, color: "#3498db", fontWeight: "bold" }}>Quiz Completed!</Text>
              <Text style={styles.info}>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text style={styles.info}>
                Incorrect Answers: {10 - this.state.results.correctAnswers}
              </Text>
              <Text style={styles.info}>Total Score: {100}</Text>
              <Text style={styles.info}>Your score: {this.state.results.score}</Text>
              <Button title="Play again!" onPress={this.reset} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
	backgroundColor: '#ccccff',
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
  info: {
	  color: 'blue',
	  fontWeight: 'bold',
	  marginTop: 10,
	  marginBottom: 10
  }
});
