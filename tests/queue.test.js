import { expect, test, describe } from 'vitest'
import { Queue, queueErrors } from '../src/utils/queue'

describe('Enqueue', () => {
  test('Enqueue adds data to the rear of the queue', () => {
    const myQueue = Queue(10)
    myQueue.enqueue('asdf')
    myQueue.enqueue('xd')
    myQueue.enqueue(123)

    console.log(myQueue.frontVal())
    console.log(myQueue.rearValue())

    expect(myQueue.rearValue()).toBe(123)
  })

  test('It should not allow enqueue when the queue is full', () => {
    const myQueue = Queue(2)
    myQueue.enqueue(123)
    myQueue.enqueue(456)

    expect(() => (myQueue.enqueue(123))).toThrowError(queueErrors.fullQueue)
  })
})
describe('Dequeue', () => {
  test('Dequeue removes the first Element', () => {
    const myQueue = Queue(2)
    myQueue.enqueue(123)
    myQueue.enqueue(456)

    myQueue.dequeue()

    expect(myQueue.frontVal()).toBe(456)
  })

  test('Dequeue should not allow remove when it is empty', () => {
    const myQueue = Queue(2)

    expect(() => myQueue.dequeue()).toThrow(queueErrors.emptyQueue)
  })
})
