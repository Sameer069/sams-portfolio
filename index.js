$(()=>{
   
    if ($(".main-subtitle-type").length == 1) {

        var typed_strings =
          $(".main-subtitle-type").text();
  
        var typed = new Typed(".main-subtitle-type", {
          strings: typed_strings.split(", "),
          typeSpeed: 100,
          loop: true,
          backDelay: 800,
          backSpeed: 200,
          showCursor: false
        });
      }

      $("#NavBtn").on("click",()=>{
       $(".navBar").toggleClass("navBlock")
       $(".navBar").css("transform","translateX(0%)")
      
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
        $(".navBar").css("transform","translateX(-103%)")
      })

     
})