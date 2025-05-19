$("document").ready(()=>{
   alert("page is loaded")
})

// $("#btn").click(()=>{
//   alert("button is clicked")
// })

$("#btn").dblclick(()=>{
  alert("button is clicked")
})

$("#btn").on("click", function () {
  console.log("click");
});