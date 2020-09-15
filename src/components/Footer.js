import React from 'react'
import './footer.css'

function Footer({filter}) {
    return (
        <article>
            <div>Filter : </div>
            <div 
                className="btn" 
                onClick={() => filter("ALL")}
            >ALL</div>
            <div 
                className="btn"
                onClick={() => filter("COMPLETED")}
            >Completed</div>
            <div 
                className="btn"
                onClick={() => filter("ACTIVE")}
            >Active</div>
        </article>
    )
}

export default Footer