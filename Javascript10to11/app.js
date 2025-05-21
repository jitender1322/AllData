// $("document").ready(()=>{
//    alert("page is loaded")
// })

// $("#btn").click(()=>{
//   alert("button is clicked")
// })

// $("#btn").dblclick(()=>{
//   alert("button is clicked")
// })

//-------------------------------

$("#hide").on("click", function () {
  $("#heading").hide()
});
$("#show").on("click", function () {
  $("#heading").show()
});
$("#toggle").on("click", function () {
  $("#heading").toggle()
});

//-------------------------------


$("#up").on("click", function () {
  $("#heading").slideUp(2000)
});
$("#down").on("click", function () {
  $("#heading").slideDown()
});
$("#slideToggle").on("click", function () {
  $("#heading").slideToggle()
});


//-------------------------------


$("#in").on("click", function () {
  $("#heading").fadeIn()
});
$("#out").on("click", function () {
  $("#heading").fadeOut()
});
$("#fadeToggle").on("click", function () {
  $("#heading").fadeToggle(1000)
});