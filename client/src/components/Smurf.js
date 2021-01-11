import React from 'react';
import { connect } from 'react-redux';
import {deleteSmurf} from "../actions";

class Smurf extends React.Component {

    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
            <h1 className='card-title'>Name: {smurf.name}</h1>
            <h4 className="card-header">Nickname: {smurf.nickname}</h4>
            <p className="card-body">Position: {smurf.position}</p>
            {/* <p className="card-body">Height: {smurf.height}</p> */}
            <p className="card-body">Description: {smurf.description}</p>
            <button className="byebye" onClick={() => {this.props.deleteSmurf(smurf.id)}}>DELETE</button>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

const mapDispatchToProps = { deleteSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.