import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
      isLoading: true

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
        this.setState({
          isLoading: false,
          time: 0,
          point: 0,
          question: res.results[0].question,
          correctAnswer: res.results[0].correct_answer,
          questionNumber: 1,
          nextQuestion: false,
          totalTime: 0,
        })
       
      })

  }

  answerOnQuestion = (answer) =>{
  apiService.getQuestions()
  .then(res => {
    this.setState(prevState => ({
      totalTime: prevState.totalTime + this.state.time,
    }))
    return res
  })
  .then(res => {
    this.setState({
      time: 0,
      question: res.results[0].question,
      correctAnswer: res.results[0].correct_answer,
      questionNumber: this.state.questionNumber + 1,
    })
    return res
   })
   .then(res=>{
    if (answer === this.state.correctAnswer) {
    this.setState({
      point: this.state.point + 1,
    })
   }
  })
 
}


  render() {
    const { questionNumber, isLoading, totalTime, point, question, time } = this.state
    
    return (
      <View style={styles.container} >
        {(isLoading) ? <Image source={require('../quiz/assets/Spinner-1s-200px.gif')} /> : null}
        {(questionNumber === 11) ?
          <View style={styles.container} >

            <TouchableOpacity
              style={styles.again}
              onPress={() =>
                this.props.navigation.navigate('Home')
              }
              underlayColor='#fff'>
              <Text style={styles.loginText}>Play Again</Text>
            </TouchableOpacity>

            <Text style={styles.questionText}> Total time taken to answer : {totalTime} s</Text>
            <Text style={styles.questionText}> Total score: {point}</Text>

          </View>
          :
          <View style={styles.container}>

            <Text style={styles.question}>Questions #{questionNumber}</Text>
            <Text style={styles.questionText}>{question}</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <TouchableOpacity
                style={styles.true}
                onPress={() => { this.answerOnQuestion('True') }}
                underlayColor='#fff'>
                <Text style={styles.loginText}>True</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.false}
                onPress={() => { this.answerOnQuestion('False') }}
                underlayColor='#fff'>
                <Text style={styles.loginText}>False</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.questionText}>Elapsed time on this question: {time} s</Text>

          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbbc05',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    color: '#575f5f',
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  question: {
    color: '#575f5f',
    fontSize: 28,
    fontWeight: 'bold'
  },
  true: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#34A853',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 150,
    marginRight:5
  },
  false: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EA4335',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 150,
    marginRight:5
  },
  again: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EA4335',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 300
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});