let items = []
let max = 10

class Queue{
  add(){
    if(items.length < max){
      items.push(items.length)
      return true
    }
    return false
  }

  element(){
    return items[0]
  }

  offer1(){
    items.push(items.length)
    return true
  }

  offer2(){
    if(items.length >= max){
      items.pop()
      items.push(items.length)
      return true
    }
    return false
  }

  peek(){
    if(items.length==0){
      return null
    }
    return items[0]
  }

  poll(){
    if( items.length == 0){
      return null
    }
    aux = items[0]
    aux.pop()
    return aux
  }

  remove(){
    aux = items[0]
    aux.pop()
    return aux
  }

  size(){
    return items.length
  }

  isEmpty(){
    return items.length==0
  }

}

let queue = new Queue


console.log(queue.isEmpty());
console.log(queue.size());