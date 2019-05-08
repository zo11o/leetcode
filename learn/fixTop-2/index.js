// 滑动滚动条
tableHeader()

function tableHeader () {
  $('#tableid').parent().prepend(
    '<table id="tableid_" border="0" cellspacing="0" cellpadding="0"><thead>' + $('#tableid thead').html() + '</thead></table>'
  ).css({
    'position': 'relative',
    'height': '300px',
    'overflow-y': 'auto'
  })
  $('#tableid_').find('th').each(function (i) {
    $(this).css('width', $('#tableid').find('th:eq(' + i + ')').width())
  })
  $('#tableid_').css({
    'position': 'absolute',
    'top': '0',
    'left': 0,
    'z-index': 2
  })
  $('#tableid').css({
    'position': 'absolute',
    'top': 0,
    'left': 0
  })
  $('.tableBox').scroll(function () {
    if ($('.tableBox').scrollTop() > 0) {
      $('#tableid_').css('top', $('.tableBox').scrollTop())
    } else {
      $('#tableid_').css('top', 0)
    }
  })
}
