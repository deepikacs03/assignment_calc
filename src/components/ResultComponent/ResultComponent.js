import React, { Component } from 'react';
import {TextField} from '@material-ui/core';

class ResultComponent extends Component {
    render() {
    let {result} = this.props;

        return (
            <div>
                {/* <input type="text" value={result}/> */}
                <TextField id="standard-basic" fullWidth label="Filled" size="small"
                value={result}/>
            </div>
        );
    }
}

export default ResultComponent;