/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
  init: function () {
  //   this.onClick = this.onClick.bind(this);
  // },
  // play: function () {
  //   window.addEventListener('click', this.onClick);
  // },
  // pause: function () {
  //   window.removeEventListener('click', this.onClick);
  // },
  // onClick: function (evt) {
  //   var videoEl = this.el.getAttribute('material').src;
  //   if (!videoEl) { return; }
  //   this.el.object3D.visible = true;
  //   videoEl.play();
  var vid2 = document.querySelector('#video');
  var btn2 = document.querySelector('#btn2');
  var btn = document.querySelector('#btn1')
  var text = document.querySelector('#text');
  var textt=document.querySelector('#textt');
  vid2.addEventListener('ended',function(){
    btn2.setAttribute("color","Yellow");
    // btn2.setAttribute("position","-3 2 -3");
    btn2.setAttribute("position","0.5 0.3 -2.5");
    btn2.setAttribute("rotation","0 0 45");
    btn2.setAttribute('material','opacity',"0.3");

    btn2.setAttribute("height","0.7");
    btn2.setAttribute("width","0.7");
    btn.setAttribute('color',"blue");
    // btn.setAttribute("position","0 -1.5 0");
    btn.setAttribute('material','opacity',"0.3");
    text.setAttribute('text','value',"REPLAY");
    // textt.setAttribute('text','value',"Google.com");


  //   alert('hi');
  // let scene = document.querySelector('a-scene');
  // let img = document.createElement('a-image');
  // img.setAttribute('img.src','./play.png');
  // scene.appendChild(img);

});

  btn2.addEventListener("click",function(){
    // alert('hi ia ');
    btn2.setAttribute('visible','false');
    // if (!vid2) { return; }
      // this.el.object3D.visible = true;
    //   videoEl.play();
    vid2.play();



  });
  btn.addEventListener("click",function(){
    
    window.location = "https://google.com";
  });
  
  }
});
