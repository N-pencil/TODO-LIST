import React from "react";

interface ClockProps{
}

interface ClockState {
    date: Date;
}

class Clock extends React.Component<ClockProps, ClockState> {
    private timerID? : NodeJS.Timeout;

    constructor (props : ClockProps) {
        super(props);

        this.state = {
            date : new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000,
        )
    }

    componentWillMount() {
        if(this.timerID) {
            clearInterval(this.timerID);
        } 
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }
 
    render() {
        return (
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock