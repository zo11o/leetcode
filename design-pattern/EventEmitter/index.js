function EventEmitter () {
  this.subList = {};
}

EventEmitter.prototype.listen = function (key, fn) {
  if (!this.subList[key]) {
    this.subList[key] = []
  }

  return this.subList[key].push(fn)
}

EventEmitter.prototype.remove = function (key, fn) {
  // var key = Array.prototype.shift.call(arguments);
  var fns = this.subList[key];
  if (!fns || fns.length === 0) {
    return false;
  }

  if (!fn) {
    fns && (fns.length = 0)
  } else {
    for (var l = fns.length - 1; l >= 0; l--) {
      var _fn = fns[l];
      if (_fn === fn) {
        fns.splice(l, 1);
      }
    }
  }
}

EventEmitter.prototype.trigger = function () {
  var key = Array.prototype.shift.call(arguments);
  var fns = this.subList[key];
  if (!fns || fns.length === 0) {
    return false;
  }

  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments)
  }
}

var eventEmitter = new EventEmitter();

eventEmitter.listen('hello', function (price) {
  console.log('hello: '+ price);
})

eventEmitter.listen('hello1', function (price) {
  console.log('hello1: '+ price);
})

eventEmitter.trigger('hello', 8891);
eventEmitter.trigger('hello1', 1111);
eventEmitter.remove('hello1', function (price) {
  console.log('hello1: '+ price);
});

eventEmitter.trigger('hello1', 1111);
