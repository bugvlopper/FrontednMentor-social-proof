import { Component } from "react";
import "../css/Card.css"

class Card extends Component {
    render() { 
        return (
            <div className="card">
                <div className="avatar-info">
                    <img src={this.props.data.avatar} alt="avatar" />
                    <div>
                        <p className="name">
                            {this.props.data.name}
                        </p>
                        <p className="buyer-cert">Verified Buyer</p>
                    </div>
                </div>
                <div className="comment">
                    <p>" {this.props.data.comment} "</p>
                </div>
            </div>
        );
    }
}
 
export default Card;