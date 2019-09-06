function observer(data) {
  if (!data || typeof data !== "object") {
    return ;
  }

  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive (data, key, value) {
  observer(value);
  var dep = new Dep();

  Object.defineProperty(data, key, {
    get: function (params) {
      if (Dep.target) {
        dep.addSub(Dep.target);
        console.log('dep.addSub', dep)
      }
      return value;
    },
    set: function (newVal) {
      if (value !== newVal) {
        value = newVal;
        dep.notify();
      }
    }
  })
}

function Dep () {
  this.subs = [];
}

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
}

Dep.prototype.notify = function () {
  console.log('属性发生变化 Watcher 执行更新视图函数');
  this.subs.forEach(sub => {
    sub.update();
  })
}

Dep.target = null;
