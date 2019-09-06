function Watcher (vm, prop, callback) {
  this.vm = vm;
  this.prop = prop;
  this.callback = callback;
  this.value = this.get();
}

Watcher.prototype = {
  update: function () {
    const value = this.vm.$data[this.prop];
    const oldVal = this.value
    if (value !== oldVal) {
      this.value = this;
      this.callback && this.callback(value)
    }
  },
  get: function () {
    Dep.target = this;
    console.log('Dep.target',Dep.target)
    const value = this.vm.$data[this.prop]; // 因为属性被监听，这一步会执行监听器的 get 方法
    Dep.target = null;
    return value;
  },
}
