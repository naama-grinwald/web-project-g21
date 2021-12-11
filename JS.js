
function navbar() {

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar_res() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline-block";
  
 var name=document.getElementById("name_row"+no);
 var email=document.getElementById("email_row"+no);
 var phone=document.getElementById("phone_row"+no);
	
 var name_data=name.innerHTML;
 var email_data=email.innerHTML;
 var phone_data=phone.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 email.innerHTML="<input type='text' class='emailInput' id='email_text"+no+"' value='"+email_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;

 document.getElementById("edit_button"+no).style.display="inline-block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_email").value;
 var new_age=document.getElementById("new_phone").value;
	
 var table=document.getElementById("staffTable");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='email_row"+table_len+"'>"+new_country+"</td><td id='phone_row"+table_len+"'>"+new_age+"</td><td><button id='edit_button"+table_len+"' class='select' onclick='edit_row("+table_len+")'>ערוך</button> <button id='save_button"+table_len+"' style='display: none;' class='select' onclick='save_row("+table_len+")'>שמור</button> <button id='removeButton' class='select' onclick='delete_row("+table_len+")'>מחק</button></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_phone").value="";
}