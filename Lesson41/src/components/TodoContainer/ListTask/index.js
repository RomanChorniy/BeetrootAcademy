import React from 'react';

class ListTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('===== ListTask -- OK =====');
        console.log('====props====', this.props)
        return (

            <p>{this.props.text}</p>
        )
    }
}

export default ListTask;