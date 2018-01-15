# Events

nodejs中所有可以`emit events`的对象都是`EventEmitter`类的实例。这些对象暴露了一个`eventEmitter.on()`方法，这个方法允许绑定一个或者多个函数到对象的事件名上。  

当`EventEmitter`对象触发了一个事件时，所有的绑定在这个特定事件名上的函数会被触发。函数的返回值会被忽略掉。

## Passing arguments and this to listeners

`eventEmitter.emit()`方法允许传参。注意：`listeners`中的this指向的是实例对象。

```
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});
myEmitter.emit('event', 'a', 'b');
```

使用es6箭头函数时，this不在指向实例

```
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');
```

# Asynchronous vs. Synchronous

一旦触发了事件，所有的`listeners`是被同步调用的，如果想做异步调用处理，可以给具体的逻辑包一层`setImmediate()`或者`process.nextTick()` 

```
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');
```

## Handling events only once

使用`eventEmitter.once()`方法，当事件被触发时，`listener`会`unregistered`并且被调用。 

## Error events 

作为最佳实践，总是应该为`eventEmitter`注册一个`error`监听器 

```
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
```

## Event: 'newListener'

当一个`listener`被添加到`listeners`时触发`newListener` 

## Event: 'removeListener' 

当一个`listener`从`listeners`被移除时触发`removeListener` 

# emitter.eventNames() 

返回`emitter`的`event names`数组，事件名可以是`string`或者`symbol`














