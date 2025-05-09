let body = document.getElementById("bd");

// async function fetchApi(){
//   let response = await fetch("https://dog.ceo/api/breeds/image/random");
//   let res = await response.json()
  
//   let img = document.createElement("img");
//   img.src = res.message
//   img.style.width = "30%"
  
//   body.append(img)
// }

async function fetchApi(){
  let response = await fetch("https://wttr.in/rajkot?format=j1");
  // let response = await fetch(`https://wttr.in/${city}?format=j1`);
  let res = await response.json()
  console.log(res);
  
}

fetchApi()