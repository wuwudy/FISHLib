;(function () {
  // 获取元素
  // 功能一：输入框获取焦点，输入框变大，下方列显现并且下方显示输入数字
  const inputTextarea = document.querySelector('.commentInput')
  const textMountShow = document.querySelector('.commentTextCal')
  const inputTextareaBorder = document.querySelector('.commentTopR')
  const computedStyle = window.getComputedStyle(inputTextarea)
  const initialMaxHeight = computedStyle.getPropertyValue('max-height')
  console.log(1)
  inputTextarea.addEventListener('input', (e) => {
    let textMount = e.target.value.length

    //输入文字，可能需要增加高度
    //测试
    console.log(initialMaxHeight)
    //删除文字，可能需要减小高度
    textMountShow.innerHTML = `${textMount}/100`
  })
})()
