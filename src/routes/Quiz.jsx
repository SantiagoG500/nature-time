import { useState } from 'react'
import { questions } from '../mocks/questions.json'
import { QuestionSet } from '../utils/Questions'

import QuizAnswers from '../components/QuizAnswers'
import QuizPagination from './QuizPagination'
import QuizQuestionInfo from '../components/QuizQuestionInfo'

function useQuiz () {
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

  return { quizQuestions, selected, prevQuestion, nextQuestion, handleSelected }
}

export default function Quiz () {
  const { quizQuestions, selected, handleSelected, prevQuestion, nextQuestion } = useQuiz()
  const indexInfo = { index: quizQuestions.getIndex(), length: quizQuestions.getListLength() }

  const current = quizQuestions.getCurrentQuestion().value
  const { questionContext } = current
  const userAnswers = quizQuestions.getUserAnswers()
  const currentAnswer = userAnswers[indexInfo.index]

  return (
    <>
      <section className='mt-7  w-11/12 max-w-screen-lg mr-auto ml-auto'>

        <div className='
          flex flex-col items-start
          w-11/12
          ml-auto mr-auto
          lg:w-full lg:flex-row lg:items-start lg:gap-4
          lg:ml-auto lg:mr-auto
        '
        >
          <QuizQuestionInfo
            question={questionContext.question}
            img={questionContext.image}
            indexInfo={indexInfo}
          />
        </div>

        <div className='
          flex flex-col gap-4 items-center justify-between
          lg:flex-row lg:items-start
          w-full mt-8
        '
        >

          <QuizAnswers
            handleSelected={handleSelected}
            selected={selected}
            answers={current.answers}
            currentAnswer={currentAnswer}
          />
          <QuizPagination
            prevQuestion={prevQuestion}
            nextQuestion={nextQuestion}
            indexInfo={indexInfo}
          />

        </div>
      </section>
    </>
  )
}
