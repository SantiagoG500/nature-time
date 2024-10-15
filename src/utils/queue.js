export const queueErrors = {
  fullQueue: 'The queue is full, add an element first',
  emptyQueue: 'The queue is empty, remove an element first'
}

export const Queue = (length) => {
  const arr = Array(length)
  let front = -1
  let rear = -1

  const rearValue = () => arr[rear]
  const frontVal = () => arr[front]

  const isEmpty = () => {
    return front === -1 && rear === -1
  }
  const isFull = () => {
    return (rear + 1) % arr.length === front
  }

  const enqueue = (val) => {
    if (isFull()) {
      throw new Error(queueErrors.fullQueue)
    } else if (isEmpty()) {
      front = 0
      rear = 0
    } else {
      rear = (rear + 1) % arr.length
    }
    arr[rear] = val
  }

  const dequeue = () => {
    if (isEmpty()) {
      throw new Error(queueErrors.emptyQueue)
    } else if (front === rear) {
      front = -1
      rear = -1
    } else {
      front = (front + 1) % arr.length
    }
  }

  const totalElements = () => {
    return arr.filter(val => val !== undefined).length
  }

  return {
    length: arr.length,

    totalElements,
    rearValue,
    frontVal,
    isEmpty,
    enqueue,
    dequeue
  }
}
