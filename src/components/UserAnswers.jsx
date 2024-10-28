export default function UserAnswers ({ answers, showCorrectAnswers }) {
  return (
    <>
      <div className='flex flex-col gap-6 mt-7'>
        {
          answers.map((ans, index) => {
            const { question, correctAnswer, userAnswer } = ans
            return (
              <div key={index} className='flex flex-col gap-5 w-11/12 p-5 bg-background-secondary rounded'>
                <p className='text-color-primary'> {question} </p>
                <p className='text-color-emphasis-500'> <span className='font-bold'>Correct Answer: </span> {correctAnswer} </p>
                {
                  !showCorrectAnswers && <p className='text-red-500'> <span className='font-bold'>your answer</span> {userAnswer} </p>
                }
              </div>
            )
          })
        }

      </div>

    </>
  )
}
