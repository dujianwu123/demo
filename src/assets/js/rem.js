~function anonymous () {
  let computerREM = function computerREM () {
    // 默认设计稿是 640px  默认 html的font-size 为 100px
    let winW = document.documentElement.clientWidth
    let desW = 640
    if (winW >= 640) {
      document.documentElement.style.fontSize = '100px'
      return ;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + 'px'
    console.log(document.documentElement.style.fontSize);
  }
  computerREM()
  window.addEventListener('resize', computerREM)
}()