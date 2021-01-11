import React, {initialState} from 'react';
import { connect } from "react-redux";
import {addSmurf} from '../actions/index'


const initialFormState = {
    name: '',
    nickname: '',
    position: '',
    height: '',
    description: ''
}


class AddForm extends React.Component {

 

    constructor(props) {
        super(props);
        this.state = initialFormState
    }

    handleChange =  (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    submitSmurf = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState(initialFormState)
    }


    render() {
        
        return(<section>
            
            <form className="addinSmurfs" onSubmit={this.submitSmurf}>
                <div >
                <h2>Add Smurf</h2>
                    <p>Name:</p>
                    <input className="imputy" required type="text" placeholder="Smurf Name" onChange={this.handleChange} name="name" id="name" value={this.state.name} style={{fontFamily: 'Barlow, sans-serif',margin: '1% auto'}}/>

                    <p>Nickname:</p>
                    <input className="imputy" required type="text" placeholder="A. K. A." onChange={this.handleChange} name="nickname" id="nickname" value={this.state.nickname} style={{fontFamily: 'Barlow, sans-serif',margin: '1% auto'}}/>

                    <p>Position:</p>
                    <input className="imputy" required type="text" placeholder="Smurf Job" onChange={this.handleChange} name="position" id="position" value={this.state.position} style={{fontFamily: 'Barlow, sans-serif',margin: '1% auto'}}/>

                    {/* <p>Height:</p>
                    <input required type="text" placeholder="cm?" onChange={this.handleChange} name="height" id="height" value={this.state.height} style={{fontFamily: 'Barlow, sans-serif',margin: '1% auto'}}/> */}

                    <p>Description:</p>
                    <input className="imputy" placeholder="Anything else?" onChange={this.handleChange} name="description" id="description" value={this.state.description} style={{fontFamily: 'Barlow, sans-serif',margin: '1% auto'}}/>
                </div>
                {this.props.error !== '' &&
                        <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error}</div>
                }

                <button className="subinSmurf">Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
  }

  const mapDispatchToProps = { addSmurf };

  export default connect(mapStateToProps, mapDispatchToProps)(AddForm);


//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.