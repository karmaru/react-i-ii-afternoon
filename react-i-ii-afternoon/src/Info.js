import React, {Component} from 'react'
// import BottomNav from './BottomNav';
// import data from './data';

export default class Info extends Component {

  constructor(){
    super()
    
    this.state={
        current: 0
    }
    // this.handleSearch = this.handleSearch.bind(this)
    //one way to bind methods to 'this' class's constructor object
  }

  

  render() {
        let h1Style = {color: 'blue',
        }
        let mappedPeople = this.props.data.map((person,i)=>{
            return (
                <div className='innerBox' key={i}>
                    <h1>{i+1}/{this.props.data.length}</h1>
                    <h1 style={h1Style}>{person.name.first} {person.name.last}</h1>
                    
                    <h3><b>From:</b> {person.city}, {person.country}</h3>
                    <h3>Job Title: {person.title}</h3>
                    <h3>Employer: {person.employer}</h3>
                    <br></br>
                    <h2>Favorite Movies:</h2>
                    <h3 className='movies'>{person.favoriteMovies}</h3>
                </div>
            )
        })
        let pre = '< Previous'
        const nex = 'Next >'

        return (
          <div>
          <div className='main-box'>
              {mappedPeople[this.state.current]}
          </div>

          <div className='bottom-nav'>
              <button onClick={()=>this.setState({current:this.state.current - 1})}>{pre}</button>
              <button onClick={()=>this.setState({current:this.state.current + 1})}>{nex}</button>
          </div>
          </div>
        )
}
}