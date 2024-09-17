$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault(); 

        var username = $("#username").val();
        var password = $("#password").val();

        // Simulate login validation
        if (username === "admin" && password === "admin") {
           
            $("#loadingOverlay").show();
            setTimeout(function() {
                window.location.href = "pageTwo.html";
            }, 1000); 
        } else {
            alert("Invalid username or password");
        }
    });
});

