import React, { Component } from 'react';
import {excercises} from './Store';

class Workouts extends Component {
    state={
        excercises
    }
    getExercisesByMuscels(){
        return this.state.excercises.reduce((excercises,excercise)=>{
            const {muscels}=excercise

            excercises[muscels]=excercises[muscels] ? [...excercises[muscels],excercise]:[excercises]
            return excercises
        },{})
        
    }
    render() {
        console.log(this.getExercisesByMuscels());
        return (
            <div>
                deepika
            </div>
        );
    }
}

export default Workouts;