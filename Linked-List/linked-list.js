class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push (value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    if (!this.head) {
      return undefined
    }
    let temp = this.head
    let pre = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  unshift (value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  shift () {
    if (!this.head) {
      return undefined
    }
    const temp = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    temp.next = null
    return temp
  }

  get (index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set (index, value) {
    if (index < 0 || index >= this.length) {
      return false
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    temp.value = value
    return true
  }
}

const myLinkedList = new LinkedList(6)
myLinkedList.push(7)
myLinkedList.push(8)
myLinkedList.push(9)
myLinkedList.pop()
myLinkedList.unshift(5)
myLinkedList.shift()
myLinkedList.get(3)
