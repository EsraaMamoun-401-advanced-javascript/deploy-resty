import React from 'react';
import ReactJson from 'react-json-view';

function Results(props) {
    return (
        <>
            <div>
                <h3>Headers: </h3>
                <ReactJson src={props.headers} theme="monokai" />
                <h3>Results: </h3>
                <ReactJson src={props.results} theme="monokai" />
            </div>
        </>
    );
}

export default Results;