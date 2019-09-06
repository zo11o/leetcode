/**
 * Compile 解析器
 * Compile 的主要作用一个是用来解析指令初始化模板，一个是用来添加添加订阅者，绑定更新函数。
 */
function Compile(vm) {
  this.vm = vm;
  this.el = vm.$el;
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init: function () {
    this.fragment = this.nodeFragment(this.el);
    console.log(this.fragment)
    this.compileNode(this.fragment);
    this.el.appendChild(this.fragment);
  },
  nodeFragment: function (el) {
    const fragment = document.createDocumentFragment();
    let child = el.firstChild;
    console.log(child)
    while (child) {
      fragment.appendChild(child);
      child = el.firstChild;
    }

    return fragment;
  },

  compileNode: function (fragment) {
    let childNodes = fragment.childNodes;
    [...childNodes].forEach(node => {

      if (this.isElementNode(node)) {
        this.compile(node);
      }

      let reg = /\{\{(.*)\}\}/
      let text = node.textContent;
      if (reg.test(text)) {
        let prop = reg.exec(text)[1]
        this.compileText(node, prop); // 渲染{{}} 模板
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileNode(node);
      }
    })
  },

  compile: function (node) {
    let nodeAttrs = node.attributes;
    [...nodeAttrs].forEach(attr => {
      let name = attr.name;
      if (this.isDirective(name)) {
        let value = attr.value;
        if (name === 'v-model') {
          this.compileModel(node, value)
        }
        node.removeAttribute(name)
      }
    })
  },

  compileModel: function (node, prop) {
    let val = this.vm.$data[prop];
    this.updateModel(node, val);

    new Watcher(this.vm, prop, value => {
      this.updateModel(node.value);
    })

    node.addEventListener('input', e => {
      let newValue = e.target.value;
      if (val === newValue) {
        return;
      }
      this.vm.$data[prop] = newValue;
    })
  },

  updateModel: function(node, value) {
    node.value = typeof value == 'undefined' ? '' : value;
  },

  updateView: function (node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value;
  },

  compileText: function (node, prop) {
    let text = this.vm.$data[prop];
    this.updateView(node, text);
    new Watcher(this.vm, prop, (value) => {
      this.updateView(node, value);
    });
  },

  isElementNode: function (node) {
    return node.nodeType === 1;
  },

  isTextNode: function (node) {
    return node.nodeType === 3;
  },

  isDirective(attr) {
    return attr.indexOf('v-') !== -1;
  }
}

