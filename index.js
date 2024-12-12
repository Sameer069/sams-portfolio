
$(()=>{

  var typed = new Typed(".main-subtitle-type", {
    strings:["Developer","Designer"],
    typeSpeed: 100,
    loop: true,
    backDelay: 800,
    backSpeed: 200,
    showCursor: false
  });
   

      $("#NavBtn").on("click",()=>{
       $(".navBar").toggleClass("navBlock")
       $(".navBar").css({transform:"translateX(0%)"})
      
      })
      $(document).on("click",".link-item1",()=>{
        $(".link-item1").addClass("active-link")
         $(".link-item2").removeClass("active-link")
         $(".link-item3").removeClass("active-link")
         $(".link-item4").removeClass("active-link")
         $(".link-item5").removeClass("active-link")

         
      })
      $(document).on("click",".link-item2",()=>{
        $(".link-item2").addClass("active-link")
         $(".link-item1").removeClass("active-link")
         $(".link-item3").removeClass("active-link")
         $(".link-item4").removeClass("active-link")
         $(".link-item5").removeClass("active-link")
         
      })
      $(document).on("click",".link-item3",()=>{
        $(".link-item3").addClass("active-link")
         $(".link-item2").removeClass("active-link")
         $(".link-item1").removeClass("active-link")
         $(".link-item4").removeClass("active-link")
         $(".link-item5").removeClass("active-link")
         
      })
      $(document).on("click",".link-item4",()=>{
        $(".link-item4").addClass("active-link")
         $(".link-item2").removeClass("active-link")
         $(".link-item3").removeClass("active-link")
         $(".link-item1").removeClass("active-link")
         $(".link-item5").removeClass("active-link")
         
      })
      $(document).on("click",".link-item5",()=>{
        $(".link-item5").addClass("active-link")
         $(".link-item2").removeClass("active-link")
         $(".link-item3").removeClass("active-link")
         $(".link-item4").removeClass("active-link")
         $(".link-item1").removeClass("active-link")
        
         
         
      })

      $(document).on("click",".close",()=>{
        $(".navBar").css({transform:"translateX(-110%)"})
      })

      var path=`M 10 100 Q 500 100 990 100`;
      var finalPath=`M 10 100 Q 500 100 990 100`;
      let string=document.getElementById("string");
      string.addEventListener("mousemove",function(e){
      path=`M 10 100 Q ${e.x} ${e.y} 990 100`
      gsap.to("svg path",{
          attr:{d:path}
      })
      })
      string.addEventListener("mouseleave",()=>{
          gsap.to("svg path",{
              attr:{d:finalPath},
              duration:6,
              ease: "elastic.out(2,0.2)",
          })
      })
      string.addEventListener("touchmove",function(e){
        path=`M 10 100 Q ${e.x} ${e.y} 990 100`
        gsap.to("svg path",{
            attr:{d:path}
        })
        })
        string.addEventListener("touchend",()=>{
            gsap.to("svg path",{
                attr:{d:finalPath},
                duration:6,
                ease: "elastic.out(2,0.2)",
            })
        })

        $(document).on("click","#LetsTalk",()=>{
          location.href="MyResume.pdf"
        })
        $(document).on("touchstart","#LetsTalk",()=>{
          location.href="MyResume.pdf"
        })
        $(document).on("click","#weatherCheck",()=>{
          location.href="https://sameer069.github.io/weatherCheck/"
        })
       
})