function drawList(array, input) {
  $("#list-item").empty();
  array.forEach(element => $("#list-item").append("<li>"+element+"</li>"));
  const lastItem = array.indexOf(input);
  $("ul li:nth-child("+String(lastItem+1)+")").hide();
  $("ul li:nth-child("+String(lastItem+1)+")").fadeIn();
}


$(document).ready(function() {
  let foodArray = [];
  $("form#firstform").submit(foodArray,function(event) {
    event.preventDefault();
    const food = $("input#question1").val().charAt(0).toUpperCase() + $("input#question1").val().slice(1);
    this.reset();
    foodArray.push(food);
    newArray = foodArray.sort();
    drawList(newArray, food);
  });
});

