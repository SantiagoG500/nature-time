import { DoubleLinkedList } from './linked_list'

export const QuestionSet = ({ questions }) => {
  const questionList = DoubleLinkedList()
  questionList.fromArray(questions)

  const userAnswers = []
  let questionIndex = 0
  let currentQuestion = questionList.head()

  const validateAnswer = ({ answer }) => {
    const { questionContext, answers, correctAnswerIndex } = currentQuestion.value
    const correctAnswer = answers[correctAnswerIndex]

    userAnswers[questionIndex] = {
      question: questionContext.question,
      correct: correctAnswer === answer,
      correctAnswer,
      userAnswer: answer
    }
  }

  const gotoPrevQuestion = () => {
    if (questionIndex === 0) return
    questionIndex--

    currentQuestion = questionList.at(questionIndex)
  }

  const gotoNextQuestion = () => {
    if (questionIndex === questionList.length() - 1) return
    questionIndex++

    currentQuestion = questionList.at(questionIndex)
  }

  const goto = (index) => {
    if (index < 0 || index > questionList.length() - 1) return
    questionIndex = index

    currentQuestion = questionList.at(index)
  }

  // get methods
  const getCurrentQuestion = () => currentQuestion

  const getIndex = () => questionIndex

  const getUserAnswers = () => userAnswers

  const getListLength = () => questionList.length()

  return {
    gotoPrevQuestion,
    gotoNextQuestion,
    goto,

    validateAnswer,

    getCurrentQuestion,
    getIndex,
    getListLength,
    getUserAnswers
  }
}
