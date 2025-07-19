
import './App.css'
  const pizzaList = [
  {
    name: "Margherita",
    ingredients: "Tomato sauce, mozzarella, basil",
    photo: "../public/buratapizza.jpg",
    price: 450
  },
  {
    name: "Pepperoni",
    ingredients: "Tomato sauce, mozzarella, pepperoni",
    photo: "../public/paperonni.jpg",
    price: 550
  },
  {
    name: "Vegetarian",
    ingredients: "Tomato sauce, mozzarella, mushrooms, bell peppers, onions, olives",
    photo: "../public/_pizza_spinaci-1.jpg",
    price: 500
  },
  {
    name: "Hawaiian",
    ingredients: "Tomato sauce, mozzarella, ham, pineapple",
    photo: "../public/hawaiian.jpg",
    price: 580
  },
  {
    name: "Quattro Formaggi",
    ingredients: "Tomato sauce, mozzarella, gorgonzola, parmesan, ricotta",
    photo: "../public/quattro-formaggi.jpg",
    price: 620
  },
  {
    name: "Diavola",
    ingredients: "Tomato sauce, mozzarella, spicy salami, chili flakes",
    photo: "../public/diavola.jpg",
    price: 570
  },
  {
    name: "Capricciosa",
    ingredients: "Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives",
    photo: "../public/capricciosa.jpg",
    price: 600
  },
  {
    name: "Calzone (Folded)",
    ingredients: "Tomato sauce, mozzarella, ham, mushrooms, ricotta (folded)",
    photo: "../public/calzone.jpg",
    price: 650
  },
  {
    name: "BBQ Chicken",
    ingredients: "BBQ sauce, mozzarella, chicken, red onions, cilantro",
    photo: "../public/bbq-chicken.jpg",
    price: 630
  },
  {
    name: "Truffle",
    ingredients: "White sauce, mozzarella, mushrooms, truffle oil, parmesan",
    photo: "../public/truffle.jpg",
    price: 750
  }
];
function App() {

  return <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
}

function Header(){
return <h1 className='titre'>PhilipeVille Pizza</h1>
}
function Menu(){
return (

<ul>
<h2 className='titremenu'>Our Menu</h2>
{ pizzaList.map((pizza, index)=> (
  <Pizza key={index} pizzaobj={pizza}/> 
))}
</ul>
)


}
function Footer(){
  
  return <h1 className='foot'>welcom in our Restaurant</h1>

}

function Pizza(props){

  return <li className='pizza-container'>
  <h3 className='pizza'>{props.pizzaobj.name}</h3>
  <img src={props.pizzaobj.photo} alt="props.name" />
  <p className='ing'>{props.pizzaobj.ingredient}</p>
  <p className='price'>{props.pizzaobj.price +10 +' Da'}</p>
  </li>
   
}
export default App
