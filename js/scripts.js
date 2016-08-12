
$(document).ready(function() {
  $("form#button").submit(function(event){

//global variables to be able to keep score which track is best for user
    var csharp = 0;
    var android = 0;
    var design = 0;

//create variables from the values received in the survey
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("#city").val();


//statements to add points to the variables from above
    if (q1 === "true"){
      android += 2;
    }
    if (q2 === "true"){
      csharp += 1;
    }
    if (q3 === "true"){
      design += 2;
    }
    if (q4 === "true"){
      design += 1;
    }
    if (q4 === "false"){
      android += 1;
      csharp += 1;
    }
    if (q5 === "1"){
      design += 1;
    }
    if (q5 === "2"){
      android += 1;
    }
    if (q5 === "3"){
      csharp += 1;
    }


//based on the scores it will suggest the one with the most points
    if(android > design && android > csharp) {
      $("#android").show();
      $("#csharp").hide();
      $("#design").hide();
      alert("Android is the best track for you!")
    } else if (design > csharp && design > android) {
      $("#design").show();
      $("#csharp").hide();
      $("#android").hide();
      alert("Design is the best track for you!")

    } else if (csharp > android && csharp > design) {
      $("#csharp").show();
      $("#android").hide();
      $("#design").hide();
      alert("C# is the best track for you!")
    }

    event.preventDefault();

  });
});
