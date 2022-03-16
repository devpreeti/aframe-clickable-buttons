

  AFRAME.registerComponent('hyperlink', {
    schema: {
      url: {default: ''}
    },

    init: function () {
        var vid = document.querySelector("#video")
        vid.addEventListener("ended", (el) => {
          console.log('hereeeee');
            
          var data = this.data;
               var el = this.el;
               el.setAttribute('visible', 'true');
      
               el.addEventListener('click', function () {
              window.location.href = data.url;
               });

            })
        },
        

    });

    