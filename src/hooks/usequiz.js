import { useState } from 'react'
import { questions } from '../mocks/questions.json'

import { QuestionSet } from '../utils/Questions'

export function useQuiz () {
  const [quizQuestions, setQuestions] = useState(QuestionSet({ questions }))
  const [selected, setSelected] = useState('')

  const handleSelected = ({ answer }) => {
    if (selected === answer) return
    setSelected(answer)
    validateAnswer({ answer })
  }

  const validateAnswer = ({ answer }) => {
    quizQuestions.validateAnswer({ answer })
    setQuestions({ ...quizQuestions })
  }

  const nextQuestion = () => {
    quizQuestions.gotoNextQuestion()
    setQuestions({ ...quizQuestions })
  }
  const prevQuestion = () => {
    quizQuestions.gotoPrevQuestion()
    setQuestions({ ...quizQuestions })
  }

  const index = quizQuestions.getIndex()
  const length = quizQuestions.getListLength()

  const answeredQuestions = quizQuestions.getUserAnswers()
    .filter(ans => ans).length

  const allQuestionsAnswered = answeredQuestions === length
  const atFinalQuestion = index + 1 === length

  const endOfQuiz = () => !allQuestionsAnswered && atFinalQuestion

  return {
    quizQuestions,
    selected,
    index,
    length,

    answeredQuestions,
    allQuestionsAnswered,
    atFinalQuestion,

    prevQuestion,
    nextQuestion,
    handleSelected,
    endOfQuiz
  }
}
