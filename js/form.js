    function errorMessage() {
             var name__error = document.getElementById("name__error");
             if (document.getElementById("name").value == "") 
             {
                   
                 // Changing content and color of content
                 name__error.textContent = "Please enter a valid name";
                 name__error.style.color = "red";
                 return false;
             }else {
                 name__error.textContent = "";
             }
             var email__error = document.getElementById("email__error");
             if (document.getElementById("email").value == "") 
             {
                   
                 // Changing content and color of content
                 email__error.textContent = "Please enter a valid email";
                 email__error.style.color = "red";
                 return false;
             } else {
                 email__error.textContent = "";
             }
         
         
         var name__error = document.getElementById("subject__error");
             if (document.getElementById("subject").value == "") 
             {
                   
                 // Changing content and color of content
                 name__error.textContent = "Please enter a valid subject";
                 name__error.style.color = "red";
                 return false;
             }else {
                 name__error.textContent = "";
             }
         
         
          
             var mymessage__error = document.getElementById("mymessage__error");
             if (document.getElementById("message").value == "") 
             {
                   
                 // Changing content and color of content
                 mymessage__error.textContent = "Please enter a valid message";
                 mymessage__error.style.color = "red";
                 return false;
             } else {
                 mymessage__error.textContent = "";
             }
         
             alert('Successfully Submited !');
         }
         
         