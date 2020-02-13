import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class KeypadComponent extends Component {
    render(){
        return (
            <div >
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('(')}>(</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('CE')}>CE</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick(')')}>)</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('C')}>C</Button><br/>


                <Button variant="contained" onClick={e => this.props.onClick('1')}>1</Button>
                <Button variant="contained" onClick={e => this.props.onClick('2')}>2</Button>
                <Button variant="contained" onClick={e => this.props.onClick('3')}>3</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('+')}>+</Button><br/>


                <Button variant="contained"  onClick={e => this.props.onClick('4')}>4</Button >
                <Button variant="contained"  onClick={e => this.props.onClick('5')}>5</Button >
                <Button variant="contained" onClick={e => this.props.onClick('6')}>6</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('-')}>-</Button ><br/>

                <Button variant="contained" onClick={e => this.props.onClick('7')}>7</Button>
                <Button variant="contained" onClick={e => this.props.onClick('8')}>8</Button>
                <Button variant="contained" onClick={e => this.props.onClick('9')}>9</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('*')}>x</Button><br/>


                <Button variant="contained" onClick={e => this.props.onClick('.')}>.</Button>
                <Button variant="contained" onClick={e => this.props.onClick('0')}>0</Button>
                <Button variant="contained" onClick={e => this.props.onClick('=')}>=</Button>
                <Button variant="contained" color="primary" onClick={e => this.props.onClick('/')}>÷</Button><br/>
            </div>
        );
    }
}

export default KeypadComponent;