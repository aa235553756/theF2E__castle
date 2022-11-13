alert('製作中，尚未完成')
$(function(){
  let a = $('.characterImg');
  let text = document.querySelector('#yourChoiceText');
  let yourChoice = $('#yourChoice');

  $(a).hover(function(){
    $(this).toggleClass('grayscale-[1]');
    let b = ($(this).attr('src')).substr(14,4)
    console.log(b);
    if(b==='前端工程'){
      b = '前端工程師'
    }else if(b==='UI設計'){
      b = 'UI設計師'
    }
    $(yourChoice).attr('src',`./dist/images/${b}.png`)
    text.innerText = `${b}`
    $(text).addClass('stroke-hover')
    },function(){
      console.log('hi');
      $(this).toggleClass('grayscale-[1]');
      $(yourChoice).attr('src',`./dist/images/unknown.gif`)
      text.innerText = `選擇你的角色`
      $(text).removeClass('stroke-hover')
    })
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#load", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: 'top 100%', // 決定動畫開始點的位置
    end: 'top 15%', // 決定動畫結束點的位置
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
})

// 撰寫動畫屬性的感覺其實類似於在寫一般CSS

tl.to('#mainCharacter', {
  y: '40vh', // 距外層容器top 0px
  // left: '50%', // 距外層容器left 50%
  // xPercent: '-50', // translate(-50%, 0)
  duration: 10, // 動畫持續時間之比例
  position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
})

// F2E loop
gsap.to("#loop", {
  xPercent: "-50", 
  ease: "none",
  duration: 10,
  repeat: -1,
});
