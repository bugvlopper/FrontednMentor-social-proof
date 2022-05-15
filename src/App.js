import { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import StarComponent from "./components/StarComponent";
import data from "./data.json";


class App extends Component {
  render() { 
    return ( 
      <div className="app">
          <div className="top-container">
            <div className="main-info">
              <h1>10,000+ of our users love our products.</h1>
              <p>
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
              </p>
            </div>
            <div className="star-section">
              <StarComponent context="Reviews"/>
              <StarComponent context="Reports Guru"/>
              <StarComponent context="BestTech"/>
            </div>
          </div>
          <div className="bottom-container">
            {data.map((data, index)=> <Card key={index} data={data}/>)}
          </div>
      </div>
     );
  }
}
 
export default App;
