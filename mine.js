

$("options > i").click(function(){
    
    $(".color-options").toggle();
    
})

var lis = $("#options ul li");
lis.eq(0).css("backgroundColor","orange")
lis.eq(1).css("backgroundColor","#09c")
lis.eq(2).css("backgroundColor","tan")
lis.eq(3).css("backgroundColor","teal")
lis.eq(4).css("backgroundColor","red")
if (localStorage.getItem("favColor") == null)
{
$("p,h1,h2,h3,i").css("color","green")

}
else
    {

    $("p,h1,h2,h3,i").css("color",localStorage.getItem("favColor"))
    }

lis.click(function(){
    
   var color =$(this).css("backgroundColor") 
   $("p,h1,h2,h3,i").css("color",color)
    localStorage.setItem("favColor",color)
})


$("#zoomInOut i").eq(0).click(function(){
    
   $("html").css("font-size","+=1px") 
    
})

$("#zoomInOut i").eq(1).click(function(){
    
   $("html").css("font-size","-=1px") 
    
})








