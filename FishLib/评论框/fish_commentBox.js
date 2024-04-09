;(function () {
  // 获取元素
  // 功能一：输入框获取焦点，输入框变大，下方列显现并且下方显示输入数字
  const inputTextarea = document.querySelector('.commentInput')
  const textMountShow = document.querySelector('.commentTextCal')
  const inputTextareaBorder = document.querySelector('.commentTopR')
  const computedStyle = window.getComputedStyle(inputTextarea)
  const initialMaxHeight = parseInt(
    computedStyle.getPropertyValue('max-height'),
  )
  inputTextarea.addEventListener('input', (e) => {
    //显示已经输入的文字数量
    let textMount = e.target.value.length
    textMountShow.innerHTML = `${textMount}/100`

    console.log('max:' + initialMaxHeight)

    // 暂时隐藏滚动条以准确测量高度
    e.target.style.overflow = 'hidden'
    //输入文字，可能需要增加高度
    e.target.style.height = '50px'

    let scrollHeight = inputTextarea.scrollHeight
    if (scrollHeight <= initialMaxHeight)
      e.target.style.height = scrollHeight + 'px'
    else {
      e.target.style.height = initialMaxHeight + 'px'
      //重新显示滚动条
      e.target.style.overflow = ''
    }
    console.log(scrollHeight)
  })
})()
