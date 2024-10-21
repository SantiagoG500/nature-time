export default function QuizAnswers ({ handleSelected, selected, answers, currentAnswer }) {
  const userAnswer = currentAnswer ? currentAnswer.userAnswer : undefined

  return (
    <>
      <section className='
        flex
        flex-col
        gap-4

        w-11/12
        lg:w-3/5

        overflow-auto

        '
      >
        {answers.map((current) => {
          return (
            <button
              key={current}
              onClick={() => handleSelected({ answer: current })}
              className={`
                  text-color-primary
                  pt-4
                  pb-4

                  hover:bg-background-emphasis-200
                  hover:text-color-secondary

                  w-full

                  rounded
                  
                  ${
                    selected === current || userAnswer === current
                    ? 'bg-color-emphasis-200 text-color-secondary'
                    : 'bg-background-secondary'
                  }
                `}
            >
              {current}
            </button>
          )
        })}
      </section>
    </>
  )
}
