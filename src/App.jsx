
import './App.css'

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

<div>
<h2 className='titremenu'>Our Menu</h2>
<Pizza name='Pizza Margerita' ingredient='Tomato ,mozzarela, and  cheese' photo='../public/buratapizza.jpg' price={450}/>

<Pizza name='Pizza Spinachi' ingredient='Tomato ,mozzarela, spinach, and ricotta cheese' photo='../public/_pizza_spinaci-1.jpg' price={600}/>
</div>
)


}
function Footer(){
  
  return <h1 className='foot'>welcom in our Restaurant</h1>

}

function Pizza(props){

  return <div className='pizza-container'>
  <h3 className='pizza'>{props.name}</h3>
  <img src={props.photo} alt="props.name" />
  <p className='ing'>{props.ingredient}</p>
  <p className='price'>{props.price +10 +' Da'}</p>
  </div>
   
}
export default App
