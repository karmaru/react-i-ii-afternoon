import React, {Component} from 'react'
import Info from './Info';
// import data from './data';

export default class BottomNav extends Component {

  constructor(props){
    super(props)
    
    this.state={
        current: 0
    }
    // this.handleSearch = this.handleSearch.bind(this)
    //one way to bind methods to 'this' class's constructor object
  }

  // let curr = this.current;

  handleNext(value){
    // console.log(value)
    this.setState({
        current: value + 1
    })
  }

  handlePrev(value){
    // console.log(value)
    this.setState({
        current: value - 1
    })
  }

  render() {
        return (
          <div>
              {/* {mappedPeople[this.state.current]} */}
              {/* <button onClick={(e)=>this.handlePrev(this.props.count)}>Prev</button> */}
              <Info/>
              <button onClick={()=>this.setState({current:this.state.current + 1})}>Next</button>
          </div>
        )
}
}