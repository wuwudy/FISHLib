;(function () {
  // 获取元素
  // 功能一：输入框获取焦点，输入框变大，下方列显现并且下方显示输入数字
  const inputTextarea = document.querySelector('.commentInput')
  const textMountShow = document.querySelector('.commentTextCal')
  const inputTextareaBorder = document.querySelector('.commentTopR')
  console.log(1)
  inputTextarea.addEventListener('input', (e) => {
    let textMount = e.target.innerHTML.length

    textMountShow.innerHTML = `${textMount}/100`
  })
})()
