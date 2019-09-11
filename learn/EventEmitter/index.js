function EventEmitter(params) {
  this.subs = {};
}

EventEmitter.prototype.on = function (event, cb) {
  (this.subs[event] || (this.subs[event] = [])).push(cb);
}

EventEmitter.prototype.trigger = function (event, ...args) {
  this.subs[event] && this.subs[event].forEach(cb => {
    cb(...args);
  });
}

EventEmitter.prototype.once = function (event, onceCb) {
  const cb = (...args) => {
    onceCb(...args);
    this.off(event, onceCb);
  }
  this.on(event, cb)
}

EventEmitter.prototype.off = function (event, offCb) {
  if (this.subs[event]) {
    var index = this.subs[event].findIndex(cb => cb === offCb);
    this.subs[event].splice(index, 1);
    if(!this.subs[event].length) delete this.subs[event]
  }
}

var event = new EventEmitter();
event.on('add', function (params) {
  console.log('这里是add')
})

event.trigger('add', '哈哈哈', 'bbb');
event.once('once', function(){
  console.log('这里是一次');
})
event.trigger('once')
event.trigger('once')
event.trigger('once')
event.trigger('add', '333', 'bbb');
event.off('add')
event.trigger('add', '444', 'bbb');
