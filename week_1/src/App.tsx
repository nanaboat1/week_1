import './App.css'; 
import Card, { CardProps } from'./components/Card'
import { inputData } from './data';






const App = () => { 


  const soccerFixtures = inputData.map( (matchFixture) => <Card {...matchFixture} />)

    // homepage
  return (

    <div> 
    <div className='title'> <h1> Sports Fixtures </h1> </div>
    <div className='App'> 
      {soccerFixtures}
    </div>
    </div>
  );

};


export default App; 