function drawList(array) {
  $("#list-item").empty();
  array.forEach(element => $("#list-item").append("<li>"+element+"</li>"));
  const lastItem = $("#list-item li").last();
  lastItem.hide();
  lastItem.fadeIn();
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

