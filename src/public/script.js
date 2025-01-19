console.log('Hello from the browser!');
document.querySelectorAll("button").forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      item.nextElementSibling.classList.toggle("newlist");
    });
  });
  function addAllIngredients(){
    var request = $.ajax({URL: '/function_name', type: 'POST', data: {}})
  }