// Check Off Specific ToDos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});  

// click on x  to delete todos
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    //stoppt clickbubbler also das alle clicked ausgeführt werden
    //span -> li -> ul -> div container -> body
    event.stopPropagation();

});

// new todo for todo list
$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>"+ " " + todoText +"</li>");

    }
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle();
});

