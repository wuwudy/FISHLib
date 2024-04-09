;(function () {
  // 获取元素
  // 功能一：输入框获取焦点，输入框变大，下方列显现并且下方显示输入数字
  const inputTextarea = document.querySelector('.commentInput')
  const textMountShow = document.querySelector('.commentTextCal')
  const computedStyle = getComputedStyle(inputTextarea)
  const maxHeight = parseInt(computedStyle.getPropertyValue('max-height'))
  console.log(1)
  inputTextarea.addEventListener('input', (e) => {
    //若没超过最大高度，不显示scroll
    let nowHeight = parseInt(computedStyle.getPropertyValue('height'))
    console.log('nowHeight:' + nowHeight + ';' + 'maxHeight:' + maxHeight)
    if (nowHeight < maxHeight) {
      e.target.style.overflowY = ''
    } else {
      console.log('大了')
      e.target.style.overflowY = 'scroll'
    }
    //显示当前输入字数
    let textMount = e.target.innerHTML.length
    if (textMount >= 100) textMountShow.classList.add('InputLengthWarn')
    else textMountShow.classList.remove('InputLengthWarn')
    textMountShow.innerHTML = `${textMount}/100`
  })
})()
