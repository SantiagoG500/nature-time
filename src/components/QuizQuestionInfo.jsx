import { useContext } from 'react'
import { themeContext } from '../context/Theme'

export default function QuizQuestionInfo ({ question, img, indexInfo }) {
  const { index, length } = indexInfo
  const { themeDark } = useContext(themeContext)

  return (
    <>
      <div>
        <h2 className={`
            ${themeDark ? 'text-color-emphasis-300' : 'text-color-emphasis-700'}
            text-lg
            font-bold
        `}
        >
          Question {index + 1} / {length}
        </h2>
        <p className='text-color-primary mt-2'>
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus pariatur architecto quia, ut aut veniam! Quis, quas nostrum officiis rerum ipsam similique error nobis quaerat aliquid et culpa cumque ipsum! */}
          {question}
        </p>

      </div>

      {
        img !== '' &&
          <div className='
            bg-color-primary
            w-full max-w-md
            aspect-video
            mt-6 ml-auto mr-auto lg:mr-0
            rounded-xl
            overflow-hidden
          '
          >
            <img
              src={img}
              alt='this is fine gif'
              className='w-full h-full object-cover object-center'
            />
          </div>
      }
    </>

  )
}
