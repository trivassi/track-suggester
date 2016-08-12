
$(document).ready(function() {
  $("form#button").submit(function(event){


    var csharp = 0;
    var android = 0;
    var design = 0;


    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question2]:checked").val();
    var q4 = $("input:radio[name=question2]:checked").val();


    if (q1 === "true"){
      android += 1;
    }
    if (q2 === "true"){
      csharp += 1;
    }
    if (q3 === "true"){
      design += 1;
    }
    if (q4 === "true"){
      design += 1;
    } else if (q4 === "false"){
      android += 1;
      csharp += 1;
    }


      // if (total > 1) {
      //   alert("Thanks " + name + "! Your score is: " + total + " You are a liberal.")
      // } else if (total === 1) {
      //   alert("Thanks " + name + "! Your score is: " + total + " You are a moderate.")
      // } else {
      //   alert("Thanks " + name + "! Your score is: " + total + " You are a conservative.")
      // }


    event.preventDefault();

  });
});
