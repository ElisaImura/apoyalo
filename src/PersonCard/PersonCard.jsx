import React, {Component} from "react";

class PersonCard extends Component{
    birthday = () => {
        this.setState({age: this.state.age+1});
    }
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div className="card">
                <div className="info">
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <button onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;