async function fetchApi(){
  let response = await fetch('https://fakestoreapi.com/products');
  let res = await response.json()
  localStorage.setItem("Data",JSON.stringify(res));
}

fetchApi()