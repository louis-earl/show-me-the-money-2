import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Ticker from './Ticker'

import { saveMeeting } from '../apis/meetings'
import {startMeeting, endMeeting} from '../actions/currentMeeting'

const Meeting = (props) => {




    const attendees = [
      {
        id: 1,
        hourlyWage: 24.00
      },
      {
        id: 2,
        hourlyWage: 24.00,
  
      },
      {
        id: 2,
        hourlyWage: 24.00,
        
      }
    ]

    const meetingName = 'Discuss rollout of new firmware'
    const meetingInProgress = props.currentMeeting.meetingInProgress
    console.log(meetingInProgress)


  const [ runningTime, setRunningTime ] = useState(5652) // time in seconds !!!!! reset init state to zero for deployment

  

  const handleClick = () => {
    
    if (!meetingInProgress) {
    props.dispatch(startMeeting(attendees, meetingName))
    
    // {(startStop == false) && timer(true)}  dispatch start Meeting, send user object
    // {(startStop == true) && timer(false)}  dispatch stop Meeting, call thunk that dispatches meeting to db
    }
    else {
      props.dispatch(endMeeting())
    }


  }


  return <div className="container">
    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <ul>
      {/*  MAP THROUGH EMPLOYEES DISPLAY IN li/button*/}
    </ul>
    <div>
      {/* <div className="timer">{displayTime()} </div> */}
      {meetingInProgress && <Ticker /> }
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>
    <div>
      <button onClick={(e) => handleClick()}>{meetingInProgress ? <p>Stop</p> : <p>Start</p>}</button>
    </div>
  </div>
}


function mapStateToProps (globalstate) {
  return {
    currentMeeting: globalstate.currentMeeting

  }
}
export default connect(mapStateToProps)(Meeting)
