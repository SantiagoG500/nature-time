import { useContext, useState } from 'react'
import { quizContext } from '../context/QuizInfo'

export default function Results () {
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true)

  const {
    length,
    quizQuestions,
    correctAnswers,
    wrongAnswers
  } = useContext(quizContext)

  const userQuestions = quizQuestions.getUserAnswers()
  console.log({ userQuestions, correctAnswers, wrongAnswers })

  const answers = showCorrectAnswers ? correctAnswers : wrongAnswers

  return (
    <section className='mt-7 text-lg max-w-screen-md m-auto pl-7'>
      <h1 className='text-color-primary text-xl font-extralight'>
        Results
      </h1>

      <div className='mt-9 mb-5'>
        <h2 className='text-color-primary text-lg'>
          <span className='font-bold'>{correctAnswers.length} / {length}</span> correct answers
        </h2>

      </div>
      <div className='flex justify-center gap-7 '>
        <button
          className='
            text-color-primary hover:text-color-emphasis-500 hover:underline
          '
          onClick={() => setShowCorrectAnswers(true)}
        >
          Correct Answers
        </button>
        <button
          className='
            text-color-primary hover:text-color-emphasis-500 hover:underline
          '
          onClick={() => setShowCorrectAnswers(false)}
        >
          incorrect Answers
        </button>
      </div>

      <div className='flex flex-col gap-6 mt-7'>
        {
          answers.map((ans, index) => {
            const { question, correctAnswer, userAnswer } = ans
            return (
              <div key={index} className='flex flex-col gap-5 w-11/12 p-5 bg-background-secondary rounded'>
                <p className='text-color-primary'> {question} </p>
                <p className='text-color-emphasis-400'> <span className='font-bold'>Correct Answer: </span> {correctAnswer} </p>
                {
                  !showCorrectAnswers && <p className='text-red-400'> <span className='font-bold'>your answer</span> {userAnswer} </p>
                }
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

// return (
//   <>
//     <h1 className='text-color-primary text-4xl text-center font-bold mt-9 mb-9'>Well done</h1>
//     <p className='text-color-primary text-center text-base '>It seems you've reached the end.</p>
//     <p className='text-color-primary text-center text-base '>The feature of see your results it's not implemented yet!</p>
//   </>
// )
