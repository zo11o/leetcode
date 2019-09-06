class Mve {

  static projectName = 'Mve';

  constructor (opt) {
    this.data = opt.data;
    this.observe = new Observe(this.data);
  }

}

/**
 * 数据监听器
 */
class Observe {
  constructor(data) {
    this.data = data;
    this.walk(this.data);
  }

  walk(data) {
    // if (!data || typeof data !== 'object') {
    //   return
    // }

    Object.keys(data).forEach(key => {
      this.defineReactive(key, data, data[key])
    })
  }

  // 依赖劫持
  defineReactive (key, data, val) {
    // this.observe(val);

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get: function () {
        console.log(val);
        return val
      },
      set: function (newVal) {
        if (val === newVal) return;
        val = newVal
      }
    })
  }
}

class Dep {
  constructor() {
    this.subs = []; // 订阅者
  }

  // 新增订阅者
  addSub () {

  }

  // 依赖
  depend () {

  }

  removeSub () {

  }

  notify () {

  }
}

/**
 * 指令编译类
 */
class Complier {

}

class Watcher {

}

const myFriends = ['美那', '华资', '莱迪'];

var opt = {
  data : {
    name: '',
    friend: '',
  },
}

var vm = new Mve(opt);

let $input = document.querySelector('#name');
let $button = document.getElementsByTagName('button')[0];

console.log($input)
$input.addEventListener('input', function (e) {
  opt.data.name = e.target.value;
})

const getRanDomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$button.addEventListener('click', function (e) {
  let randomNum = Math.floor(getRanDomNum(0,2));
  opt.data.friend = myFriends[randomNum]
  console.log(opt.data)
})


