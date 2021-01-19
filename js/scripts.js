function drawList(array) {
  $("#list-item").empty();
  array.forEach();

}


$(document).ready(function() {
  let foodArray = [];
  $("form#firstform").submit(foodArray,function(event) {
    event.preventDefault();
    const food = $("input#question1").val();
     this.reset();
    foodArray.push(food);

    drawList(foodArray);
  });
});

