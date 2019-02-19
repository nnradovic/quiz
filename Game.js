import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
      isLoading:true
      
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
          isLoading:false,
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
            totalTime: prevState.totalTime + this.state.time,
            
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

  componentWillMount(){
    clearInterval(this.myTimer)
  }
  render() {


    return (



      <View style={styles.container} >
        {(this.state.isLoading)? <Image source={require('../quiz/assets/Spin-1s-200px.gif')} /> : <Text></Text>}
         
        {(this.state.questionNumber === 10) ?
          <View style={styles.container} >
          <Button
            title="Play again"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
            /> 
            <Text> Total time taken to answer : {this.state.totalTime} s</Text>
            <Text> Total score: {this.state.point}</Text>
            </View>
            :
            <View style={styles.container}>
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
            <Text>Elapsed time on this question: {this.state.time} s</Text>
           
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