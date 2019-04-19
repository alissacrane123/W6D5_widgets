import React from 'react'

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date()}

    }

    tick() {
        this.setState({
            time: new Date(),
        });
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(), 1000);
    }

    render() {
        return (
        <h1 class="clock">           
            Widgets4Life <br/>
            {String(this.state.time.getHours())}:
            {String(this.state.time.getMinutes())}:
            {String(this.state.time.getSeconds())}              
        </h1>
        );
    }
}

// module.exports = Clock; 

export default Clock;