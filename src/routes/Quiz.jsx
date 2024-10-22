import QuizAnswers from '../components/QuizAnswers'
import QuizPagination from './QuizPagination'
import QuizQuestionInfo from '../components/QuizQuestionInfo'
import { useQuiz } from '../hooks/usequiz'

export default function Quiz () {
  const {
    quizQuestions,
    selected,
    index,
    length,

    handleSelected,
    prevQuestion,
    nextQuestion,
    endOfQuiz,

    allQuestionsAnswered,
    atFinalQuestion,
    answeredQuestions
  } = useQuiz()

  const current = quizQuestions.getCurrentQuestion().value
  const { questionContext } = current
  const userAnswers = quizQuestions.getUserAnswers()
  const currentAnswer = userAnswers[index]

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
            indexInfo={{ index, length }}
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
            atFinalQuestion={atFinalQuestion}
            allQuestionsAnswered={allQuestionsAnswered}
            endOfQuiz={endOfQuiz}
            answeredQuestions={answeredQuestions}
          />

        </div>
      </section>
    </>
  )
}
