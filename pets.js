var $= function(id){
    return document.getElementById(id);
  };
    var joinList = function()
    {
      var firstName = $ ("first_name").value;
      var lastName = $ ("larst_name").value;
      var isValid = true;
    
        if ($("first_name").value == "")
        {
          $ ("first_name_error").firstChild.nodeValue = "Please enter first name.";
          isValid = false;
        }
        else
        {
          $("first_name_error").firstChild.nodeValue = "";
        }
      
        if ($("last_name").value == "")
        {
          $ ("last_name_error").lastChild.nodeValue = "Please enter last name.";
          isValid = false;
        }
        else
        {
          $("last_name_error").lastChild.nodeValue = "";
        }
      
        if (isValid){
          $("name_form").submit();}
    };
  
  window.onload = function(){
    $("join_list").onclick = joinList;
    $("first_name").focus();
  }
  