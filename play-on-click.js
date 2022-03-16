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