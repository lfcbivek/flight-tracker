import React from "react";
import Button from '@mui/material/Button';

import './QueryForm.css'

class QueryForm extends React.Component {
    render() {
        return (
            <div className="query-form">
                <h1>Flight Tracker</h1>
                <hr />
                <Button variant="contained">Hello World</Button>
            </div>
        )
    }
}

export default QueryForm;