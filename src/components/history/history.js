import React from 'react';
// import { If, Then, Else } from '../if/if';
// import Form from '../form/form';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // history: [],
        };
    }
    // handleHistory = (history) => {
    //     this.setState({ history });
    // }

    render() {
        return (
            <>
                <div>
                <h2>History Content.................</h2>
                {/* <Form historyF={this.handleHistory} /> */}
                </div>
            </>
        )
    }
}

export default History;