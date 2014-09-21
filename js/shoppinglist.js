function controller (){
	var userInput ;

	//call input analyser
	$("#addbutton").click(inputAnalyzer);
	$(".list").on("click" , "li img", removeItem);
	$(".list").on("click" , "li .checkout" , checkItem); //removeItem is a function yet to be created by chimela
}

function inputAnalyzer(){
	//accept input
	var userInput = $("#user_input").val();
	//call validate to validate user input
	// var validation = isInputValid(userInput);
	if(isInputValid(userInput)){
		//do what valid input shud be done
	$(".list").append("<li><input type=\"checkbox\" class=\"checkout\">" + userInput + "<img src=\"img/delIcon.jpg\" id =\"icon\">" + "</li>");
	}
	else{
		// do what invalid input shud be done
	}
	//display depending on result of validation;
}

function isInputValid(input)
{
	if(($.trim(input) !=="") && (isNaN($.trim(input))) && input.length > 2 )
	{
		return true;
	}

	else
	{
		
	$("#inputwrapper").append("<p>" + "Please make a valid entry"+ "</p>");
		return false;
	}
}

function checkItem()
{
	// $(this).parent().toggleClass("checkout");
	if($(this).is(":checked")){
			$(this).parent().css("text-decoration", "line-through");
	}
}
function removeItem ()
{
	$(this).parent().remove();
}
$(document).ready(controller);
	// call controlleer
	
