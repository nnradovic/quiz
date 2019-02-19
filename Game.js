import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { apiService } from './apiService/apiService';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: null,
      time: null,
      totalTime: null,
      question: null,
      correct: null,
      questionNumber: null,
      nextQuestion: false
    };
  }

  componentDidMount() {

    this.myTimer = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)

    apiService.getQuestions()
      .then(res => {
        console.log(res);

        return res

      })
      .then(res => {
        this.setState({
          time: 0,
          point: 0,
          question: res.results[0].question,
          correctAnswer: res.results[0].correct_answer,
          questionNumber: 0,
          nextQuestion: false,
          totalTime: 0,
        })
        this.startCounter()
      })





    if (this.state.nextQuestion) {



    }
  }







  answerOnQuestion = (answer) => {
    if (answer === this.state.correctAnswer) {


      apiService.getQuestions()
        .then(res => {
          console.log(res);
          return res
        })
        .then(res => {

          this.setState(prevState => ({
            totalTime: prevState.totalTime + this.state.time
          }))
          return res
        })
        .then(res => {
          this.setState({
            point: this.state.point + 1,
            time: 0,
            question: res.results[0].question,
            correctAnswer: res.results[0].correct_answer,
            questionNumber: this.state.questionNumber + 1,
            nextQuestion: true
          })
        })


        
    } else {

      apiService.getQuestions()
        .then(res => {
          console.log(res);
          return res
        })
        .then(res => {

          this.setState(prevState => ({
            totalTime: prevState.totalTime + this.state.time
          }))

          return res
        })
        .then(res => {
          this.setState({
            time: 0,
            question: res.results[0].question,
            correctAnswer: res.results[0].correct_answer,
            questionNumber: this.state.questionNumber + 1,
            nextQuestion: true
          })
        })
    }
  }
  render() {


    return (

      <View style={styles.container} >


        {(this.state.questionNumber === 3) ?
          <View style={styles.container} >
          <Button
            title="Play Another Game"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
            /> 
            <Text>{this.state.totalTime}</Text>
            </View>
            :
            <View style={styles.container}>
            <Text>{this.state.question}</Text>
            <Text>History Quiz</Text>
            <Text>{this.state.question}</Text>
            <Button
              style={styles.button}
              title='True'
              raised
              onPress={() => { this.answerOnQuestion('True') }}
            />
            <Button
              style={styles.button}
              title='False'
              raised
              onPress={() => { this.answerOnQuestion('False') }}
            />
            <Text>{this.state.time}</Text>
            <Text>{this.state.point}</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});