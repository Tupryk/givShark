import React, { Component } from 'react';
import "../css/sharkFella.css";


class TimeComponent extends Component {
    constructor(props){
        super(props);
        this.state = { time: Date.now() };
        this.imageUrl = props.imageUrl;
        this.image_width = 128; // Shoud be influenced by actual size of shark
        this.image_height = 100;
        this.key = props.key;
        this.pos = {
            left: 100,
            top: 200,
        };
    }
    render(){
        return (
            <>
                <div> { this.state.time } </div>
                <img
                    key={this.key}
                    class={`sharkFella_${this.key}`}
                    alt="moving_shark" src={this.imageUrl}
                    width={this.image_width}
                    height={this.image_height}
                />
            </>
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 30);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default TimeComponent;
