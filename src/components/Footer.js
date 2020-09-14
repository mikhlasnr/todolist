import React from 'react'
import {setFilter} from '../actions'
import {connect} from 'react-redux'

import './footer.css'
function Footer({dispatch}) {
    return (
        <div>
            <span>Filter : </span>
            <span 
                className="btn" 
                onClick={() => dispatch(setFilter("ALL"))}
            >ALL</span>
            <span 
                className="btn"
                onClick={() => dispatch(setFilter("COMPLETED"))}
            >Completed</span>
            <span 
                className="btn"
                onClick={() => dispatch(setFilter("ACTIVE"))}
            >Active</span>
        </div>
    )
}



export default connect()(Footer)