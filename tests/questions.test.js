import { expect, test, describe, vi } from 'vitest'
import { questions } from '../src/mocks/questions.json'

import { QuestionSet } from '../src/utils/Questions'

describe('Questions module navigation', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(questions)
    })
  )
  const response = await fetch('/questions')
  const data = await response.json()
  const question = QuestionSet({ questions: data })

  test('Should set the questions with a given array', async () => {
    expect(question.getCurrentQuestion().value).toEqual(data[0])
  })

  test('Should go to the next question', async () => {
    question.gotoNextQuestion()

    expect(question.getCurrentQuestion().value).toEqual(data[1])
  })

  test('Should not reduce by 1 the index if it is 0', async () => {
    question.gotoPrevQuestion()

    expect(question.getCurrentQuestion().value).toEqual(data[0])
  })

  test('Should not increment by 1 the index is at last index', async () => {
    question.gotoNextQuestion()
    question.gotoNextQuestion()
    question.gotoNextQuestion()
    question.gotoNextQuestion()

    expect(question.getCurrentQuestion().value).toEqual(data[4])
  })
})
describe('Question module, answer validation', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(questions)
    })
  )
  const response = await fetch('/questions')
  const data = await response.json()
  const question = QuestionSet({ questions: data })

  test('Should validate answers correctly', () => {
    question.goto(0)

    for (let i = 0; i <= 3; i++) {
      const { answers, correctAnswerIndex } = question.getCurrentQuestion().value
      const response = answers[i]

      console.log({ response, correct: answers[correctAnswerIndex] })

      question.validateAnswer({ response })
      question.gotoNextQuestion()
    }

    const answers = question.getUserAnswers()
    console.log(answers)

    expect(answers[0].correct).toBe(true)
    expect(answers[1].correct).toBe(false)
    expect(answers[2].correct).toBe(false)
    expect(answers[3].correct).toBe(true)
  })
})
