$(function(){
    $("#submitBurger").on("submit", function () {
        event.preventDefault();

        let newBurger = {
            name: $("burgerInput").val().trim()
        };

        $.ajax({
            type: "post",
            url: "/api/burgers",
            data: newBurger
        }).then(function(){
            console.log("Burger ready to be devoured");
            location.reload();
        });
        
    });
})