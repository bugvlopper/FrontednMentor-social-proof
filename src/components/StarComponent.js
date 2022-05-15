import { Component } from "react";
import "../css/StarComponent.css"

class StarComponent extends Component {
    render() { 
        return (
            <div className="rate-container">
                <div className="star-container">
                    <img src="./images/icon-star.svg" alt="Star" />
                    <img src="./images/icon-star.svg" alt="Star" />
                    <img src="./images/icon-star.svg" alt="Star" />
                    <img src="./images/icon-star.svg" alt="Star" />
                    <img src="./images/icon-star.svg" alt="Star" />
                </div>
                <p>
                    Rated 5 Star in {this.props.context}
                </p>
            </div>
        );
    }
}
 
export default StarComponent
;