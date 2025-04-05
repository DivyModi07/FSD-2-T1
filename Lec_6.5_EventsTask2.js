fs = require('fs')
const EventEmitter = require('events')
const Event = new EventEmitter()

var l1=()=>{
    console.log("I am listener 1")
}
var l2=()=>{
    console.log("I am listener 2")
}

Event.addListener("task",l1)
Event.on("task",l2)
let count=Event.listenerCount("task")
console.log(count+" for task event")
Event.emit("task")

Event.removeListener("task",l1)

let count1=Event.listenerCount("task")
console.log(count1+" for task event after removary")
Event.emit("task")