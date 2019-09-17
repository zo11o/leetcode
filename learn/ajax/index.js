window.$ = (function () {

  var $;

  function JQuery () {
    var name = 'AJAX';

  }

  var utils = {
    isEmptyObject: function (object) {
      if (typeof object !== 'object') {
        throw new Error('不是对象');
      }

      return Object.prototype.toString.call(object) === '[object Object]' && JSON.stringify(object) === "{}";
    }
  }

  JQuery.prototype.ajax = function (opt) {
    var url = opt.url,
    data = opt.data || {},
    method = opt.method.toUpperCase() || 'GET',
    async = opt.async == null ? true : opt.async
    success = opt.success || function () {

    },
    error = opt.error || function () {

    }

    ajaxInit();

    function ajaxInit () {
      // console.log(opt)
      var xhr;
      if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      console.log(xhr)

      if (method === 'GET') {
        var isEmptyData = utils.isEmptyObject(data)
        url = isEmptyData ? url : `${url}?${formateData(data)}`
        xhr.open(method, url, async)
        xhr.send();
      } else if (method === 'POST') {
        data = formateData(data);
        xhr.open(method, url, async)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(data);
      }

      xhr.onreadystatechange = function (params) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText)
          var resp = JSON.parse(xhr.responseText);
          success && success(resp)
        }
        
        if (xhr.readyState === 4 && xhr.status !== 200) {
          console.log(xhr)
          error && error()
        }
      }
    }

    function formateData(data) {
        let arr = [];
        for (let key in data) {
            //避免有&,=,?字符，对这些字符进行序列化
            arr.push(encodeURIComponent(key) + '=' + data[key])
        }
        return arr.join('&');
    }

    return this;
  }

  $ = new JQuery()

  return $
})()

document.onreadystatechange = function(params) {
  if (document.readyState == "complete") {
    //当页面加载状态为完全结束时进入
    $.ajax({
      data: {
        name: 'zorro',
        age: '27'
      },
      method: 'GET',
      url: 'http://127.0.0.1:3000/ajax',
      success: function (resp) {
        console.log(resp)
      },
      error: function (e) {
        console.log(e)
      }
    })
  }
}


