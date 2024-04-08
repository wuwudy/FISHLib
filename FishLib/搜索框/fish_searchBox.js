;(function () {
  let input = document.querySelector('.fish_searchBox input')
  let form = document.querySelector('form')
  let ul = document.querySelector('.fish_searchBox .recommendList')

  // 控制推荐栏目出现与否
  console.log(ul.classList)
  input.addEventListener('focus', function () {
    ul.classList.toggle('showRecommendList')
    console.log(111)
    console.log(ul.classList)
  })

  input.addEventListener('blur', function () {
    ul.classList.toggle('showRecommendList')
    console.log(222)
    console.log(ul.classList)
  })

  // 点击recommendList某一栏目时将该栏放置于input中
})()
