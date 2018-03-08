$("#searchbox").on("keydown", function (event) {

    if (event.keyCode == 13) {

        var typedText = $("#searchbox").val();
        console.log(typedText);
        var request = $.ajax({
             url: "https://api.github.com/search/users?q=" + typedText,
             method: "GET"

        });


        request.done(function (msg) {
             //$("#users").html(msg);
             console.log('aaa');
        });

        request.fail(function(jqXHR, textStatus){
            alert("Request failed" + textStatus);
        })
    }
        request.send()
    });
