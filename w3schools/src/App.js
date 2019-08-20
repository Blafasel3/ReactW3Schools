import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        // console.log('constructor');
        this.state = {
          brand: 'Ford',
          model: 'Mustang',
          color: 'red',
          year: 1967,
          errormessage: ''
        };
    }

    applyPaintJob = (event) => {
      event.preventDefault();
      this.setState({color: 'blue'});
    }
    
    onChange = (event) =>  {
      const val = event.target.value;
      if(val !== '' && Number(val)) {
        this.setState({errormessage: 'No numbers allowed in color'});
      } else {
        this.setState({errormessage: ''});
      }
      this.setState({color: val});
    }

    /**
     * Mounting Cycle (adding element to DOM)
     * constructor()
     * getDerivedStateFromProps()
     * render() - required
     * componentDidMount()
     */
    static getDerivedStateFromProps(props, state) {
      // console.log('getDerivedStateFromProps');
      return state;
    }

    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.model} from {this.state.year}.
          </p>
          <form onSubmit={this.applyPaintJob}>
            <p>Enter color here</p>
            <input 
              type="text"
              name="color"
              onChange={this.onChange}></input>
            <p>{this.state.errormessage}</p>
            <input type="submit">
            </input>
          </form>

        </div>
      );
    }

    componentDidMount() {
      // console.log('componentDidMount');
    }
    // end Mounting Cycle

    /**
     * Updating Cycle:
     * getDerivedStateFromProps()
     * shouldComponentUpdate()
     * render() - required, see above
     * getSnapshotBeforeUpdate()
     * componentDidUpdate()
     */
    shouldComponentUpdate() {
      // console.log('update');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      // console.log('getSnapshotBeforeUpdate', prevState.color);
      return prevState;
    }

    componentDidUpdate() {
      // console.log('componentDidUpdate');
    }
    // end Updating Cycle

    /**
     * Unmounting Cycle (removing element from the DOM)
     * componentWillUnmount()
     */
    componentWillUnmount() {
      // console.log('componentWillUnmount');
    }
}

export default Car;