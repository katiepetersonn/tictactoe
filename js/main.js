//SWITCH PLAYERS
  //   if x then make it 0
  //   else make it X
  //  Use a variable to detemine the current player

//CHECK FOR A WINNER
  //  Use the text in each box

//Event handlers
  //Use event handlers to change the text
  //click handlers - who is the current player?

//DISPLAY WINNER

//SEPERATE GAME LOGIC FROM PRESENTATION
//var playerOne = O;
//var playerTwo = X;

$(document).ready (function () {

  var player = 1;
  var count= 0;

  $(".box").one("click", function () {
    $(this).addClass("animated flipInX");
      console.log(this);
    if(player === 1){
      $(this).text("O");
      $("#whoseGo").text("twos ");
      player = 2;
      count += 1;
    } else {
     $(this).text("X");
     $("#whoseGo").text("ones ");
     player = 1;
     count += 1;
   }
  });


var playerOneWins = function () {
  window.setTimeout( function () {
      swal({
          title: "Player One Wins",
          text: "You are a legend!",
          closeOnConfirm: true,
          timer: 5000
      });}, 1000);
};

var playerTwoWins = function () {
  window.setTimeout( function () {
      swal({
        title: "Player Two Wins",
        text: "You are a superstar!",
        closeOnConfirm: true,
        timer: 5000
    });}, 1000);
};

//if all boxes in a row ===  X
      //then playerOne wins
    //Else if all boxes equal 0
      //then playerTwo wins

//first row win
  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box2").text() === "O" && $("#box3").text() === "O") {
      playerOneWins();
    } else if ($("#box1").text() === "X" && $("#box2").text() === "X" && $("#box3").text() === "X") {
      playerTwoWins();
  }
});

//second row win

  $(".box").click(function () {
    if ($("#box4").text() === "O" && $("#box5").text() === "O" && $("#box6").text() === "O") {
      playerOneWins();
  } else if ($("#box4").text() === "X" && $("#box5").text() === "X" && $("#box6").text() === "X") {
    playerTwoWins();
  }
  });

//third row win

  $(".box").click(function () {
    if ($("#box7").text() === "O" && $("#box8").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  } else if ($("#box7").text() === "X" && $("#box8").text() === "X" && $("#box9").text() === "X") {
    playerTwoWins();
  }
  });


//if all boxes in a column === X
      //then playerOne wins
    //Else if all boxes in a column equal 0
      //then playerTwo wins

//first column win

  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box4").text() === "O" && $("#box7").text() === "O") {
      playerOneWins();
  } else if ($("#box1").text() === "X" && $("#box4").text() === "X" && $("#box7").text() === "X") {
    playerTwoWins();
  }
  });

//second column win

  $(".box").click(function () {
    if ($("#box2").text() === "O" && $("#box5").text() === "O" && $("#box8").text() === "O") {
      playerOneWins();
  } else if ($("#box2").text() === "X" && $("#box5").text() === "X" && $("#box8").text() === "X") {
      playerTwoWins();
  }
  });

//third column win

  $(".box").click(function () {
    if ($("#box3").text() === "O" && $("#box6").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  }  else if ($("#box3").text() === "X" && $("#box6").text() === "X" && $("#box9").text() === "X") {
      playerTwoWins();
  }
  });

//if all boxes in a diagonal === X
  //then playerOne wins
//Else if all boxes in a diagonal equal 0
  //then playerTwo wins

  //right diagonal win

  $(".box").click(function () {
    if ($("#box3").text() === "O" && $("#box5").text() === "O" && $("#box7").text() === "O") {
      playerOneWins();
  } else if ($("#box3").text() === "X" && $("#box5").text() === "X" && $("#box7").text() === "X") {
    playerTwoWins();
  }
  });

//left diagonal win

  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box5").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  } else if ($("#box1").text() === "X" && $("#box5").text() === "X" && $("#box9").text() === "X") {
      playerTwoWins();
  } else if (count === 9) {
    swal("Its a tie!");
  }
  });

//reset board

$(".reset").on("click", function ()  {
    $("td").empty();
    window.location.reload(true);
});

 }); //doc.ready end of
