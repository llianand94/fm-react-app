import React, { Component } from 'react';
import { format, add,startOfMonth} from 'date-fns'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date()
    }
  }
  btnHandler = (options)=>{
    const {day}= this.state;
    const newDate = add(day, options);
    this.setState({day:newDate})
  }
  

  render() {
    const {day} = this.state;
    return (
      <div>
        <p>{format(day,'MMMM')}</p>
        <p>{format(startOfMonth(day),'cccc')}</p>
        <p>{format(day,"dd MMMM yy 'year, ' cccc")} </p>
        <button onClick={()=>this.btnHandler({days:1})}> Add 1 day</button>
        <button onClick={()=>this.btnHandler({weeks:1})}> Add 1 week</button>
        
      </div>
    );
  }
}

export default Calendar;
