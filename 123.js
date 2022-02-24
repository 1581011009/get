function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ChangeFontColor()
{
    var OriginalFont=document.getElementById("Font").innerHTML;
    document.getElementById("Font").innerHTML='<font color="red">'+OriginalFont+'</font>';
}


function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}

var that = $(this);
var mSearch = $("#m-search");
$("#search-input").bind("change paste keyup", function(){
  var value = $(this).val();
  if (!value) {
    mSearch.html("");
    return;
  }; 
  mSearch.html('.wrap:not([data-index*="' + value.toLowerCase() + '"]) {display: none;}');
});