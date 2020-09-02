//maps through the list of states to
//create the list as shown on the stats page

//we passed in USdata and all state data into this component. These are our props.
import React from 'react'
import { Link } from 'react-router-dom'
import StateSingle from './StateSingle.jsx'

function StatesList(props) {
    return (
        <>
            <div className='info-container'>
                <StateSingle currentPage={props.currentPage} usData={props.usData} />
            </div>
            <div className='state-list'>
                {props.allStateData.map((state) => {
                    return <Link to={`/stats/${state.state}`} key={state.hash}><h3>{props.fullName[state.state]}</h3></Link>
                })}
            </div>
        </>
    )
}

export default StatesList