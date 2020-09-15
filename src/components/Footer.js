import React from 'react'
import './footer.css'

function Footer({filter}) {
    return (
        <div>
            <span>Filter : </span>
            <span 
                className="btn" 
                onClick={() => filter("ALL")}
            >ALL</span>
            <span 
                className="btn"
                onClick={() => filter("COMPLETED")}
            >Completed</span>
            <span 
                className="btn"
                onClick={() => filter("ACTIVE")}
            >Active</span>
        </div>
    )
}

export default Footer