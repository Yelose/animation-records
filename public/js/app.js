
let imprimirMenu = document.querySelector('.dropdown-menu ul');
let btnMenu=document.getElementById("categorias");
let menuContainer=document.getElementById('menu-desplegable');
let menu = ['Moda','Regalos','Hogar','Peluches','Papelería','Accesorios'];

for (let i = 0; i < menu.length; i++) {
    let input = menu[i];
    
if (menu[i]) {
      let result = input;
      let menuItem = document.createElement('li');
      menuItem.textContent = result;
      imprimirMenu.appendChild(menuItem);
     
    }
  };
function showItems (){
  document.getElementById( "categorias" ).addEventListener( "click" , function m()
  { 
        document.getElementById("menu-desplegable" );}); 
        console.log('showItems()')
}
  showItems();

// btnMenu.addEventListener("click",function(){
//   menuContainer.classList.toggle("mostrar");
//   console.log(menu)
// });
