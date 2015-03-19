function cancel(location)
{
	var answer = confirm("Are you sure? \nThis cannot be undone.");
		console.log(answer);
    	if (answer) {
      location.path("/manageDecks");
   		 }
}

function element_display(show_option,hide_option,title)
{
	document.getElementById('main-title').innerHTML=title;
	for(var i=0;i<show_option.length;i++)
	{
		if(document.getElementById(show_option[i]))
		document.getElementById(show_option[i]).style.display="block";
	}
	for(var i=0;i<hide_option.length;i++)
	{
		if(document.getElementById(hide_option[i]))
		document.getElementById(hide_option[i]).style.display="none";
	}
}