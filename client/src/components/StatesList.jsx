//maps through the list of states to
//create the list as shown on the stats page

//we passed in USdata and all state data into this component. These are our props.
import React from 'react'
import { Link } from 'react-router-dom'
import StateSingle from './StateSingle.jsx'
import State from './State.jsx'

function StatesList(props) {
    return (
        <>
            <StateSingle currentPage={props.currentPage} usData={props.usData} />
            {props.allStateData.map((state, i) => {
                return <Link to={`/stats/${state.state}`}><h3 key={i}>{props.fullName[state.state]}</h3></Link>
            })}
        </>
    )
}

export default StatesList
