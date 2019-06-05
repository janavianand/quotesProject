import React from 'react'
import {connect} from 'react-redux'
import {quoteAndFlagThunk} from '../store/quote'

class GetQuote extends React.Component{

  render(){
    return (
      <div>
        {!this.props.flag ?
        <a className="waves-effect waves-light btn" onClick={()=>this.props.setFlag()}>Get Quote</a>:
        <a className="waves-effect waves-light btn">Get Another Quote</a>
        }
      </div>
    )
  }
}

//map the state to the component via props
const mapState=(state)=>{
  return {
    flag:state.quotes.flag
  }
}
//dispatch thunk
const mapDispatch=(dispatch)=>{
  return {
    setFlag:function(){
      return dispatch(quoteAndFlagThunk())
    }
  }
}

export default connect(mapState,mapDispatch)(GetQuote)
