$(document).ready(function() {
    
    $("html").click(function(e) 
{
    var container = $(".profile");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".bio").slideUp(600);
        $(".profile-pic").removeClass("faded");
        $(".bio").removeClass("darker").addClass("lighter");
        $(".profile").removeClass("darker").addClass("lighter");
       
        
    }
});

    $(".profile").click(function() {
        
        if ( $(this).find(".profile-pic").hasClass("faded")){
            $(this).find(".profile-pic").removeClass("faded");
            $(".profile-pic").not($(this).children()).addClass("faded");
            
        }
    
      else {
            $(".profile-pic").not($(this).children()).toggleClass("faded");
      }
         
        $(this).find(".bio").slideToggle(600);

        $(this).find(".more").fadeToggle(600);
        
        $(".more").not($(this).children()).show();

        $(".bio").not($(this).children()).slideUp(600);

       

       $(this).toggleClass("lighter").toggleClass("darker");
       
      $(".profile").not($(this)).removeClass("darker").addClass("lighter");
      
      
       $(this).find(".bio").removeClass("lighter").addClass("darker");


       $(".bio").not($(this).children()).removeClass("darker").addClass("lighter");
        
    });
    
  



});