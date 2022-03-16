// AFRAME.registerComponent('button-on-end', {
//     init: video.addEventListener('materialvideoended', function() {
//         // show button
//         el = this.el;
//         this.showBtn= this.showBtn.bind(this);
//         el.addEventListener('ended', this.showBtn);
//       }),

     
    

//     showBtn: function(evt) {
//         console.log('in window.showBtn');
//         var video = document.querySelector("#video")
//         var btn1 = document.querySelector('#btn1'); 
//         btn1.setAttribute('visible', 'true');
//         console.log("Show Button");
    
//        },
//     schema: {
//         target: { type: 'selector', default: '[a-videosphere]' }
//       }
    
// });

AFRAME.registerComponent("button-on-end", {
    init: function() {
        // this.onClick = this.onClick.bind(this);
        // alert('hhhhhh');
      var vid = document.querySelector("#video")
      // var videosphere = document.querySelector("#videosphere")
      
      vid.addEventListener("ended", (e) => {
        console.log('hereeeee')
          
          var btn1 = document.querySelector('#btn1')
         btn1.setAttribute('visible', 'true');
         console.log('hereeeee')
        //  var text = document.querySelector('#text')
        //  text.setAttribute('visible','false');
        //  btn1.addEventListener('click', this.onClick) 
        // {
        //     console.log('hereeeee')
        //     window.location.href="https://www.google.com/";
        // }); 
    
        //change the sphere material + play the new video
      })
      // vid.addEventListener("canplay",(e) => {
      //   var btn1 = document.querySelector('#btn1')
      //    btn1.setAttribute('visible', 'false');
      //    console.log('hereeeee')
      //    var text = document.querySelector('#text')
      //    text.setAttribute('visible','true');


      // })

      // videosphere.addEventListener("materialvideoloadeddata",(e) => {
      //   alert('here i am');
      //   var btn1 = document.querySelector('#btn1');
      //    btn1.setAttribute('visible', 'false');

      // })
    },
    // onClick: function (evt) {
    //     // var videoEl = this.el.getAttribute('material').src;
    //     // if (!videoEl) { return; }
    //     // this.el.object3D.visible = true;
    //     // videoEl.play();
    //     window.location.href="https://www.google.com/";
    //   }
});
      