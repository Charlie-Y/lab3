'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
        $("#testjs").text("Experience Chan! It's not a lot of questions.\nToo many questions is the Chan disease.\nThe best way is just to observe the noise of the world.\nThe answer to your questions?\nAsk your own heart.")
	});

    $("a.thumbnail").click(projectClick);
    $(".jumbotron p").toggleClass("active");
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("#submitBtn").click( function(e){
        console.log("foobar");

        var value = $("#projectForm").find('select').val();
    
        var $project = $(value);
        var $width = $("#width");
        var $description = $("#description");

        console.log($description.val())

        if ($width.length > 0){
            $project.animate({
                width: $width.val()
            });
        }

        $project.find(".project-description").text($description.val())
    })
}

function projectClick(e) { 
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
        $('.project-description').fadeOut()
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}