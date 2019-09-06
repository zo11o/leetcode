// var people = {
//   name: 'zorro',
//   age: 18
// }

// people.age;
// people.age = 20

// var zorro = {}
// var age;

// Object.defineProperty(zorro, 'age', {
//   get: function () {
//     console.log('获取年龄')
//     return age
//   },
//   set: function (newVal) {
//     console.log('设置年龄');
//     age = newVal
//   }
// })

// zorro.age = 18;
// console.log(zorro.age);

function Mue(options, prop) {
  this.$options = options;
  this.$data = options.data;
  this.$prop = prop;
  this.$el = document.querySelector(options.el);

  Object.keys(this.$data).forEach(key => {
    this.proxyData(key)
  })
  this.init();
}

Mue.prototype.init = function () {
  observer(this.$data);
  // this.$el.textContent = this.$data[this.$prop];
  // new Watcher(this, this.$prop, value => {
  //   this.$el.textContent = value;
  // })
  new Compile(this);
}

Mue.prototype.proxyData = function (key) {
  console.log(this)
  Object.defineProperty(this, key, {
    get: function () {
      return this.$data[key]
    },
    set: function (value) {
      this.$data[key] = value;
    }
  })
}
