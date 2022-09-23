function validateAddBook()
        {
          var valid = true;
          


          if (document.getElementById("booknameadd").value.search(/^[a-zA-Z0-9'\(\)\#\,\-\:\._ ]{10,}$/) != 0)        
          {
              valid = false;
              document.getElementById("errBooknameadd").innerHTML = "ERROR: Book Name is mandatory, should be at least 10 characters And only contains( A-Za-z , 0-9 , # , . , - , _ , () , : , , ) !";
              document.getElementById("errBooknameadd").style.display = "inline";
          }
          else
          {
              document.getElementById("errBooknameadd").innerHTML = "";
              document.getElementById("errBooknameadd").style.display = "none";
          }

          if (document.getElementById("author").value.search(/^[A-Za-z ]{10,}$/) != 0)         
          {
              valid = false;
              document.getElementById("errAuthor").innerHTML = "ERROR: Author is mandatory, should be at least 10 characters And only contains( A-Za-z ) !";
              document.getElementById("errAuthor").style.display = "inline";
          }
          else
          {
              document.getElementById("errAuthor").innerHTML = "";
              document.getElementById("errAuthor").style.display = "none";
          }

           if (document.getElementById("isbn").value.search(/^(1)[0-9]{9}$/) != 0)         
          {
              valid = false;
              document.getElementById("errISBN").innerHTML = "ERROR: ISBN is mandatory, should be exactly 10 digits, starting with 1, And only contains( 0-9 ) !";
              document.getElementById("errISBN").style.display = "inline";
          }
          else
          {
              document.getElementById("errISBN").innerHTML = "";
              document.getElementById("errISBN").style.display = "none";
          }

           if (document.getElementById("publisher").value.search(/^[a-zA-Z0-9'\(\)\#\,\-\:\._ ]{10,}$/) != 0)        
          {
              valid = false;
              document.getElementById("errPublisher").innerHTML = "ERROR: Publisher is mandatory, should be at least 10 characters And only contains( A-Za-z , 0-9 , # , . , - , _ , () , : , , ) !";
              document.getElementById("errPublisher").style.display = "inline";
          }
          else
          {
              document.getElementById("errPublisher").innerHTML = "";
              document.getElementById("errPublisher").style.display = "none";
          }

          if (document.getElementById("language").value == "Please select the book language...")
          {
              valid = false;
              document.getElementById("errLanguage").innerHTML = "ERROR: Select the book language !";
              document.getElementById("errLanguage").style.display = "inline";
          }
          else
          {
              document.getElementById("errLanguage").innerHTML = "";
              document.getElementById("errLanguage").style.display = "none";
          }

           if (document.getElementById("category").value == "Please select the book category...")
          {
              valid = false;
              document.getElementById("errCategory").innerHTML = "ERROR: Select the book category !";
              document.getElementById("errCategory").style.display = "inline";
          }
          else
          {
              document.getElementById("errCategory").innerHTML = "";
              document.getElementById("errCategory").style.display = "none";
          }

          if (document.getElementById("editionadd").value.search(/^[0-9]{0,}$/) != 0)         
          {
              valid = false;
              document.getElementById("errEditionadd").innerHTML = "ERROR: Edition is optional, Should be only digits And only contains( 0-9 ) !";
              document.getElementById("errEditionadd").style.display = "inline";
          }
          else
          {
              document.getElementById("errEditionadd").innerHTML = "";
              document.getElementById("errEditionadd").style.display = "none";
          }

          if (document.getElementById("year").value.search(/^[0-9]{4}$/) != 0)         
          {
              valid = false;
              document.getElementById("errYear").innerHTML = "ERROR: Year is mandatory, should be four digits only And only contains( 0-9 ) !";
              document.getElementById("errYear").style.display = "inline";
          }
          else
          {
              document.getElementById("errYear").innerHTML = "";
              document.getElementById("errYear").style.display = "none";
          }

           if (document.getElementById("numberofpages").value.search(/^[0-9]{1,}$/) != 0)         
          {
              valid = false;
              document.getElementById("errNumberofpages").innerHTML = "ERROR: Number Of Pages is mandatory, should be only digits And only contains( 0-9 ) !";
              document.getElementById("errNumberofpages").style.display = "inline";
          }
          else
          {
              document.getElementById("errNumberofpages").innerHTML = "";
              document.getElementById("errNumberofpages").style.display = "none";
          }

         if (document.getElementById("bookdescription").value.search(/^[a-zA-Z0-9'\(\)\#\,\-\:\;\{\}\=\+\<\>\@\$\&\%\^\*\`\~\[\]\|\/\?\!\"\\._ ]{20,}$/) != 0)        
          {
              valid = false;
              document.getElementById("errBookdescription").innerHTML = "ERROR: Book Description is mandatory, should be at least 20 characters !";
              document.getElementById("errBookdescription").style.display = "inline";
          }
          else
          {
              document.getElementById("errBookdescription").innerHTML = "";
              document.getElementById("errBookdescription").style.display = "none";
          }

         
        
        
         

          if (valid == false)
          {
               return false;    // don't submit the form data to the server because of any validation error(s)
          }
          else
          {
               return true;     // submit the form data to the server because all data looks correct without errors
          }
        }




        function validateReviewBook()
        {
          var valid = true;
          


          if (document.getElementById("booknamereview").value.search(/^[a-zA-Z0-9'\(\)\#\,\-\:\._ ]{10,}$/) != 0)        
          {
              valid = false;
              document.getElementById("errBooknamereview").innerHTML = "ERROR: Book Name is mandatory, should be at least 10 characters And only contains( A-Za-z , 0-9 , # , . , - , _ , () , : , , ) !";
              document.getElementById("errBooknamereview").style.display = "inline";
          }
          else
          {
              document.getElementById("errBooknamereview").innerHTML = "";
              document.getElementById("errBooknamereview").style.display = "none";
          }    


          if (document.getElementById("editionreview").value.search(/^[0-9]{0,}$/) != 0)         
          {
              valid = false;
              document.getElementById("errEditionreview").innerHTML = "ERROR: Edition is optional, Should be only digits And only contains( 0-9 ) !";
              document.getElementById("errEditionreview").style.display = "inline";
          }
          else
          {
              document.getElementById("errEditionreview").innerHTML = "";
              document.getElementById("errEditionreview").style.display = "none";
          }


          if (document.getElementById("reviewername").value.search(/^[A-Za-z ]{10,}$/) != 0)         
          {
              valid = false;
              document.getElementById("errReviewername").innerHTML = "ERROR: Reviewer Name is mandatory, should be at least 10 characters And only contains( A-Za-z ) !";
              document.getElementById("errReviewername").style.display = "inline";
          }
          else
          {
              document.getElementById("errReviewername").innerHTML = "";
              document.getElementById("errReviewername").style.display = "none";
          }


          if (document.getElementById("revieweremail").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0)
          {
              valid = false;
              document.getElementById("errRevieweremail").innerHTML = "ERROR: Provide a correct email address !";
              document.getElementById("errRevieweremail").style.display = "inline";
          }
          else
          {
              document.getElementById("errRevieweremail").innerHTML = "";
              document.getElementById("errRevieweremail").style.display = "none";
          }


           if (document.getElementById("reviewrating").value == "Please select the review rating...")
          {
              valid = false;
              document.getElementById("errReviewrating").innerHTML = "ERROR: Select the book rating !";
              document.getElementById("errReviewrating").style.display = "inline";
          }
          else
          {
              document.getElementById("errReviewrating").innerHTML = "";
              document.getElementById("errReviewrating").style.display = "none";
          }


         if (document.getElementById("reviewdescription").value.search(/^[a-zA-Z0-9'\(\)\#\,\-\:\;\{\}\=\+\<\>\@\$\&\%\^\*\`\~\[\]\|\/\?\!\"\\._ ]{20,}$/) != 0)        
          {
              valid = false;
              document.getElementById("errReviewdescription").innerHTML = "ERROR: Review Description is mandatory, should be at least 20 characters !";
              document.getElementById("errReviewdescription").style.display = "inline";
          }
          else
          {
              document.getElementById("errReviewdescription").innerHTML = "";
              document.getElementById("errReviewdescription").style.display = "none";
          }

        
        
         

          if (valid == false)
          {
               return false;    // don't submit the form data to the server because of any validation error(s)
          }
          else
          {
               return true;     // submit the form data to the server because all data looks correct without errors
          }
        }

        function openForm() {
            document.getElementById("myForm").style.display = "block";
          }
          
          function closeForm() {
            document.getElementById("myForm").style.display = "none";
          }

          const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})