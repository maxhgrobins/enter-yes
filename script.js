function validateForm(){
  if (document.getElementById("YesResponse").value != "yes"){
    if (document.getElementById("YesResponse").value == "no"){
      document.getElementById("YesPrompt").innerHTML='Ouch';
    }else{
      document.getElementById("YesPrompt").innerHTML='Good effort';
    }
  }else{
    document.getElementById("YesPrompt").innerHTML='Nice';
  }
}