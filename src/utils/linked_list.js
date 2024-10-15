import { Node } from './nodes.js'

export const DoubleLinkedList = () => {
  let head = null
  let tail = null
  let length = 1

  const append = (value) => {
    const newNode = Node({
      value,
      nextNode: null,
      prevNode: null
    })

    if (!head) {
      head = newNode
      tail = newNode
      return
    }

    let currentNode = head

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    newNode.prevNode = currentNode
    currentNode.nextNode = newNode
    tail = newNode
    length++
  }

  const prepend = (value) => {
    const newNode = Node({ value, nextNode: head, prevNode: null })
    head = newNode
  }

  const toString = () => {
    if (!tail && !head) return

    let message = `${head.prevNode} <-> `
    let currentNode = head

    // the ternary is to print if the node is pointing to null
    while (currentNode) {
      message += `(${currentNode.value}) <-> ${currentNode.nextNode ? '' : currentNode.nextNode}`

      currentNode = currentNode.nextNode
    }

    return message
  }

  const at = (index) => {
    let currentNode = head
    let count = 0

    while (currentNode) {
      if (count >= index) return currentNode
      else {
        currentNode = currentNode.nextNode
        count++
      }
    }
  }

  const find = (callback) => {
    let currentNode = head
    while (currentNode) {
      if (callback(currentNode.value)) {
        return currentNode
      }
      currentNode = currentNode.nextNode
    }
    return null
  }

  const fromArray = arr => {
    arr.forEach(item => append(item))
  }

  return {
    head: () => head,
    tail: () => tail,
    length: () => length,

    at,
    find,
    append,
    prepend,
    toString,
    fromArray
  }
}
