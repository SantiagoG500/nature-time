import { expect, test, describe } from 'vitest'
import { DoubleLinkedList } from '../src/utils/linked_list'

describe('Double linked list', () => {
  test("Head's previous node should point to null", () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.head().prevNode)
  })
  test("Tail's previous node should point to null", () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.tail().prevNode)
  })
})

describe('Append and prepend', () => {
  test('Should return the correct length', () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.length()).toBe(3)
  })

  test('Head should return the correct node value', () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.head().value).toBe(1)
  })

  test('Tail should return the correct node value', () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.tail().value).toBe(3)
  })

  test('Should change the head when doing a prepend', () => {
    const linkedList = DoubleLinkedList()

    linkedList.prepend(1)
    linkedList.prepend(2)
    linkedList.prepend(3)

    expect(linkedList.head().value).toBe(3)
  })
})
describe('toString', () => {
  test('should return a linked list acording to a given array', () => {
    const linkedList = DoubleLinkedList()
    const expectedString = 'null <-> (1) <-> (2) <-> (3) <-> null'

    linkedList.prepend(3)
    linkedList.prepend(2)
    linkedList.prepend(1)

    expect(linkedList.toString()).toBe(expectedString)
  })
})
describe('At', () => {
  test('should return the correct node with the given index', () => {
    const linkedList = DoubleLinkedList()

    linkedList.prepend(3)
    linkedList.prepend(2)
    linkedList.prepend(1)

    expect(linkedList.at(1).value).toBe(2)
  })

  test('should return the tail if the index given is the last element in the list', () => {
    const linkedList = DoubleLinkedList()

    linkedList.append(3)
    linkedList.append(2)
    linkedList.append(1)

    expect(linkedList.at(2).value).toBe(1)
  })
})
describe('Find', () => {
  test('should return the correct node with the given search element', () => {
    const linkedList = DoubleLinkedList()

    linkedList.prepend(3)
    linkedList.prepend(2)
    linkedList.prepend(1)

    expect(linkedList.find(val => val === 1).value).toBe(1)
  })
  test('Needs to work with objects', () => {
    const linkedList = DoubleLinkedList()

    linkedList.prepend({ name: 'pedro', edad: 22 })
    linkedList.prepend({ name: 'lucas', edad: 23 })
    linkedList.prepend({ name: 'Andrés', edad: 24 })

    expect(linkedList.find(val => val.name === 'lucas').value).toEqual({ name: 'lucas', edad: 23 })
  })
})

describe('fromArray', () => {
  test('should return a linked list acording to a given array', () => {
    const arr = ['This', 'is', 'an', 'example']
    const linkedList = DoubleLinkedList()
    linkedList.fromArray(arr)

    expect(linkedList.toString()).toBe('null <-> (This) <-> (is) <-> (an) <-> (example) <-> null')
  })
})
