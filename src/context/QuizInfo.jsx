import { createContext } from 'react'
import { useQuiz } from '../hooks/usequiz'

export const quizContext = createContext()

export function QuizInfoProvider ({ children }) {
  const {
    quizQuestions,
    selected,
    index,
    length,

    answeredQuestions,
    allQuestionsAnswered,
    atFinalQuestion,
    correctAnswers,
    wrongAnswers,

    prevQuestion,
    nextQuestion,
    handleSelected,
    endOfQuiz
  } = useQuiz()

  return (
    <quizContext.Provider
      value={{
        quizQuestions,
        selected,
        index,
        length,

        answeredQuestions,
        allQuestionsAnswered,
        atFinalQuestion,
        correctAnswers,
        wrongAnswers,

        prevQuestion,
        nextQuestion,
        handleSelected,
        endOfQuiz
      }}
    >
      {children}
    </quizContext.Provider>
  )
}
