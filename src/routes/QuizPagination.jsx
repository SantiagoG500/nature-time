import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Pagination half implemented, It only goes forward and backwards

export default function QuizPagination ({ indexInfo, prevQuestion, nextQuestion }) {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0)
  const questionsPerPage = 3
  const questionArr = Array(questionsPerPage).fill()

  const { index, length } = indexInfo
  const endOfQuiz = index === length - 1

  const prev = () => {
    prevQuestion()
  }

  const next = () => {
    if (endOfQuiz) {
      navigate('/results')
      console.log('end')
    }
    nextQuestion()
  }
  return (
    <section className='flex gap-8 h-min w-min'>

      <button
        className='
        flex items-center justify-center
        rounded-xl
        text-color-primary
        text-1xl
        w-16 h-16

        hover:bg-background-emphasis-200
        hover:text-color-secondary

        bg-background-secondary
      '
        onClick={prev}
      >
        <ArrowLeft />
      </button>

      {/* <div className='flex gap-2 mr-5 ml-5'>
        {questionArr.map((_, index) => (
          <button
            key={index}
            className='
            flex items-center justify-center
            rounded-xl
            text-color-primary
            text-1xl
            w-10 h-10
            bg-background-secondary'
          >
            {currentPage * questionsPerPage + index + 1}
          </button>
        ))}
      </div> */}

      <button
        className='
        flex items-center justify-center
        rounded-xl
        text-color-primary
        text-1xl
        w-16 h-16

        hover:bg-background-emphasis-200
        hover:text-color-secondary

        bg-background-secondary
      '
        onClick={next}
      >
        {
          endOfQuiz
            ? <Check />
            : <ArrowRight />
        }
      </button>
    </section>
  )
}