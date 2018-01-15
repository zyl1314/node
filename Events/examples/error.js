const EventEmitter = require('events');

class MyEvent extends EventEmitter {};

const event = new MyEvent();

event.on('test', function() {
    try {
        a + b
    } catch(err) {
        this.emit('error', err)
    }
})

event.on('error', function(err) {
    console.log(err);
})

event.emit('test');