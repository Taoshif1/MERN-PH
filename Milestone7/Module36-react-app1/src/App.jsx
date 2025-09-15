import './App.css'

function App() {
  return (
    <>

      <h1>Learning REACT Core Components</h1>
      <Person name="Taoshif Gazi" age={20}></Person>

      <Friend number={1} name="Moon"></Friend>
      <Friend number={2} name="Reza"></Friend>
      <Friend number={3} name="Badhon"></Friend>

      <Pets number={1} name="Dog"></Pets>
      <Pets number={2} name="Cat"></Pets>

      <FavCar number={1} name="Koenigsegg Agera RS" brand="Koenigsegg Automotive" price="$2.5 million" country="Sweden"></FavCar>
      <FavCar number={2} name="Bugatti Chiron" brand="Bugatti" price="$3 million" country="France"></FavCar>
      <FavCar number={3} name="Pagani Huayra" brand="Pagani" price="$1.4 million" country="Italy"></FavCar>

      <Salamy name="Mahafuza" amount="$100000" event="Eid-Ul-Fitr"></Salamy>
      <Salamy name="Moon" amount="$999999" event="Birthday"></Salamy>
      <Salamy name="Moon" amount="" event="graduation"></Salamy>
    </>
  )

}

function Salamy({name, amount, event}) {
  // const {event, name, amount=1} = props;
  return(
      <div>
        <p>Event: {event}</p>
        <p>Salamy For: {name}</p>
        {/* <p>Amount: {amount === "" ? 0 : amount}</p> */}
        <p>Amount: {amount || 0}</p>
      </div>
  )
}

function Person(props) {
  const {name, age} = props;
  // const name = 'taoshif'
  // const age = 18;

  const personStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '20px'
  }

  return (
    <p style={personStyle}>Hi i am {name} & I am {age} years old</p>

  )
}

function FavCar(props){
  // console.log(props)
  const {number, name, brand, price, country} = props;
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '10px'
      
    }}>
      <h2 >My Fav Car {number}</h2>
      <p>Brand: {brand}</p>
      <p>Model: {name}</p>
      <p>Price: {price}</p>
      <p>Country: {country}</p>
    </div>
  )
}

function Pets(props){
  const {number, name} = props;
  return(
    <div>
      <h2 >My Pet No. {number}</h2>
      <p>{name}</p>
    </div>
  )
}

function Friend(props){
  const {number, name} = props;
  return(
    <div className='friends'>
      <h2>My Friend No. {number}</h2> 
        <p className=''>{name}</p>
    </div>
  )
}

export default App
