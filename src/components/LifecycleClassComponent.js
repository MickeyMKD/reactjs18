import { Component } from "react";


export class LifecycleClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleClassComponent -> constructor');
        
        // This is initial state of the component
        this.state = {
            counter : 0
        }
    };
    
    // Method called only after initial render()
    componentDidMount() {
        console.log('LifecycleClassComponent -> componentDidMount')
    };

    // Method called when component will be removed from DOM
    componentWillUnmount() {
        console.log('LifecycleClassComponent -> componentWillUnmount')
    };
    
    increment = () => {
        // wrong way
        // this.state.counter += 1;

        // correct way
        // this.setState({counter: 5});
        this.setState((state) => ({counter: ++state.counter}));

        console.log('increment', this.state.counter);
    };

    // Method called every time component needs to be re-rendered
    render() {
        console.log('LifecycleClassComponent -> render')
        return (
            <>
                <h2>Class Component</h2>
                <p>Counter value : {this.state.counter}</p>
                <button onClick={this.increment}>
                        Increment
                </button>
            </>
        );
    };
};