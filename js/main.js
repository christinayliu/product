window.today = new Date();
window.dd = today.getDate();
window.mm = today.getMonth()+1; //January is 0!
window.yyyy = today.getFullYear();

if(mm==2){
	if(dd==28){
		dd=1;
		mm=3;
	}
	else{
		dd=dd+1;	
	}
}
else if(mm==12){
	if(dd==31){
		dd=1;
		mm=1;
	}
	else{
		dd=dd+1;	
	}
}
else if(mm==1||mm==3||mm==5||mm==7||mm==8||mm==10){
	if(dd==31){
		dd=1;
		mm=mm+1;
	}
	else{
		dd=dd+1;	
	}
}
else if(mm==4||mm==6||mm==9||mm==11){
	if(dd==30){
		dd=1;
		mm=mm+1;
	}
	else{
		dd=dd+1;
	}
}

if(mm==1){
	month = "Jan";
}
else if(mm==2){
	month = "Feb";
}
else if(mm==3){
	month = "Mar";
}
else if(mm==4){
	month = "Apr";
}
else if(mm==5){
	month = "May";
}
else if(mm==6){
	month = "Jun";
}
else if(mm==7){
	month = "Jul";
}
else if(mm==8){
	month = "Aug";
}
else if(mm==9){
	month = "Sept";
}
else if(mm==10){
	month = "Oct";
}
else if(mm==11){
	month = "Nov";
}
else if(mm==12){
	month = "Dec";
}

if(dd==1||dd==21||dd==31){
	window.suffix = "st";
}
else if(dd==2||dd==22){
	window.suffix = "nd";
}
else if(dd==3||dd==23){
	window.suffix = "rd";
}
else{
	window.suffix = "th";
}

window.tomorrow = month + ". " + dd + suffix;
// the above code could have been written more efficiently, I guess.
// it doesn't account for leap years but it's just to change "coming (date+1)"
// if you don't want that text, then feel free to delete relevant portions from the DOM, below here, and all code above this line.

$(window).load(function() {
    // DOM modifying stuff goes here:

	//this generally helps the look of certain elements:
	$("#actualImage").css("width", ($(".header").width()*10/100));

	if($("html").width() < 420){
		window.headerHeight = .5;	
	}
	else{
		window.headerHeight = 1;	
	}
	
	$(".logoName").css("margin-top", ($("#header").height() - $(".logoName").height())/2);
	$(".logoName").css("margin-bottom", ($("#header").height() - $(".logoName").height())/2);
	
	var temp1 = $("#header").height();
	var temp2 = parseInt($("#headerLink").css("line-height"));
	var temp3 = $(".logo").height()
	
	$("#headerLink").css("margin-top", (temp3-temp2)/2/3+(temp1-temp3)/2);
	$("#headerLink").css("margin-bottom", (temp3-temp2)/2/3+(temp1-temp3)/2);
	
	$("#headerLink").css("padding-top", (temp3-temp2)/2/3*2);
	$("#headerLink").css("padding-bottom", (temp3-temp2)/2/3*2);
	$("#headerLink").css("padding-left", (temp3-temp2)/2/3*2);
	$("#headerLink").css("padding-right", (temp3-temp2)/2/3*2);

	

	$("#actualImage").css("height", ($(".logo").height()));
	$("#actualImage").css("width", ($(".logo").height()));

	$("#changeDate").html("Coming " + tomorrow);

	$("#firstText").css('margin-top', ($("#first").height() - $("#firstText").height()) / 2);
	$("#secondText").css('margin-top', ($("#second").height() - $("#secondText").height()) / 2);
	$("#thirdText").css('margin-top', ($("#third").height() - $("#thirdText").height()) / 2);
	//add more for each section in section4
});
