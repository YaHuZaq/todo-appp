function addWork(){
    let todo = document.getElementById("first").value;

    if(todo == ""){
      document.getElementById("kall").style.display ="block";
        setTimeout( function empty(){
          document.getElementById("kall").style.display ="none";
        }, 2000);
        return false;
    }
  
    var mostList = document.createElement("li");
      mostList.innerHTML = todo;
      document.getElementById("all-list").appendChild(mostList);
       
      mostList.addEventListener("click",  function hide(){
          mostList.style.display ="none";
      });
       
}