$("#btn").click(function () {
    let username = $("#username").val();
    let githubUrl = "https://api.github.com/users/" + username;

    $.ajax({
        url: "https://api.github.com/users/" + username,
        type: "GET",
        dataType: "json",
        success: function (response) {
            // show data in DIV
            $("#account-data").append("<br>" + "<i>" + response.name + "</i>");
            $("#account-data").append("<br>" + "<i>" + response.company + "</i>");
        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
            $("#account-data").append("<br>" + "<i>" + "Ei löydy" + "</i>");
        },
    });
})
