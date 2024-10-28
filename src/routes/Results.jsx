import { useContext, useEffect, useState } from 'react'
import { quizContext } from '../context/QuizInfo'
import { DoughnutChart } from '../components/DoughnutChart'
import UserAnswers from '../components/UserAnswers'
import { useNavigate } from 'react-router-dom'

export default function Results () {
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true)
  const navigate = useNavigate()

  const {
    length,
    correctAnswers,
    wrongAnswers,
    allQuestionsAnswered
  } = useContext(quizContext)

  const data = {
    labels: ['Correct', 'Wrong'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [correctAnswers.length, wrongAnswers.length],
        backgroundColor: [
          '#22c55e',
          '#ef4444'
        ]
      }
    ]
  }

  const answers = showCorrectAnswers ? correctAnswers : wrongAnswers

  useEffect(() => {
    if (!allQuestionsAnswered) navigate('/')
    console.log('asdf')
  }, [])

  return (
    <section className='mt-8 text-lg max-w-screen-md m-auto pl-7'>

      <header>
        <div className='flex justify-center  w-full h-full min-h-72 '>
          <DoughnutChart chartData={data} />
        </div>

        <div className=''>
          <h1 className='mt-9 text-color-primary text-xl font-extralight'>
            Results
          </h1>
          <h2 className='text-color-primary text-lg'>
            <span className='font-bold'>{correctAnswers.length} / {length}</span> correct answers
          </h2>
        </div>
      </header>

      <div className='flex justify-center gap-7 '>

        {
          wrongAnswers.length !== 0 &&
            <>
              <button
                className='
                text-color-primary hover:text-color-emphasis-500 hover:underline
                '
                onClick={() => setShowCorrectAnswers(false)}
              >
                incorrect Answers
              </button>
              <button
                className='
                  text-color-primary hover:text-color-emphasis-500 hover:underline
                '
                onClick={() => setShowCorrectAnswers(true)}
              >
                Correct Answers
              </button>
            </>
        }
      </div>

      <UserAnswers answers={answers} showCorrectAnswers={showCorrectAnswers} />

    </section>
  )
}
