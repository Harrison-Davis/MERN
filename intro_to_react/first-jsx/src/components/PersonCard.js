import React, { Component } from 'react';



class PersonCard extends Component{

    // Delcare construcor to override our default 
    // constructor so that we can initially set the state object.
    constructor(props){
        // gives us all the functionality of the edfault constructor that comes with component
        super(props);
        // this. refers to scope. state is an object that holds attributes/
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hair
        }
    }

    // modify age of state
    increaseAge = () => {
        console.log("clicked");
        this.setState({
            age: this.state.age +=1
        }, () => console.log(this.state.num))
    }

    // modify age of object
    increaseAge1 = () => {
        console.log("clicked");
        this.setState({
            age: this.state.age + 1
        }, () => console.log(this.state.num))
        // if you want to console log within state
    }

        increaseAge2 = () => {
            console.log("clicked");
            this.setState({
                PersonCard: this.state.age += 1
            })
        }


    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName} </h1>
                <p> Age: {this.state.age}</p>
                <p> Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.increaseAge1()}>Increase Age</button>
            </div>
        )
    }
}

export default PersonCard;