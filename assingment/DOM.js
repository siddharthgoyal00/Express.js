function populatediv (){
   const a = document.getElementById("firstNUM").value;
   const b = document.getElementById("secondNUM").value;
  
   // what if the addition logic is on the backend server 
   /*
       function populatediv (){
   const a = document.getElementById("firstNUM").value;
   const b = document.getElementById("secondNUM").value;
  
   fetch("https://sum-server.100xdevs.com/sum?a=" +a + "&b=" +b)
      .then(function(response){
         response.text()
         .then(function(ans){
              document.getElementById("finalSum").innerHTML =ans;
              })  
         });
       }

    // another way to do that 

    async function popularteddiv2(){
     const a = document.getElementById("firstNUM").value;
   const b = document.getElementById("secondNUM").value;

   const response = await fetch("https://sum-server.100xdev.com/sum?a="+a+"b="+b)
   const ans = await response.text();

    document.getElementById("firstNum").innnerHTML = ans
   */
  
    const element = document.getElementById("finalSum")
    element.innerHTML = parseInt(a)+parseInt(b);
}