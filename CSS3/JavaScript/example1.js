$(function()
{
   $(".contain button").click(function()
   {
       var $underline = $(".contain .underline");
       var $content = $(".contain span");
       var width = undefined;

       if($underline.css("width") === "0px")
       {
           width = parseInt($content.css("width")) + 20 ;
           $underline.css("width", width);
           $content.css("color", "#5f75c0");
       }
       else
       {
           width = 0;
           $underline.css("width", width);
           $content.css("color", "#000");
       }
   })
});