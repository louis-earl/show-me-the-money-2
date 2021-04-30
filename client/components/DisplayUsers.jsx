import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectedUsers } from '../actions/users'

const DisplayUsers = (props) => {

    useEffect (() => {
        props.dispatch(selectedUsers(props.usersInMeeting))
    }, [props.usersInMeeting])

    const handleClick = (e, user) => {
        const styleClass = "userList-button-in-meeting"
        let arr = [...props.usersInMeeting]
        if(e.target.className == styleClass) { e.target.className = "userList-button" }
        else { e.target.className = styleClass }

        const foundUser = arr.find(el => el.username === user.username) !== undefined
        if(foundUser){ 
            const index = arr.indexOf(user.username)
            arr.splice(index, 1)
            
            props.setUsersInMeeting(arr)
        } else { 
            props.setUsersInMeeting([...props.usersInMeeting, user]) 
        }
    }


    return (
        <div className="users">
            <h3>Who would you like to invite to your meeting? Click to add attendees.</h3>

            <div className="user-list">
                <ul>
                    {props.users.map((user, i) => {
                        return <li key={i}>
                            <button className="userList-button" type='button' onClick={(e) => handleClick(e, user)}>
                                {user.username}
                            </button>
                        </li>
                    })}
                </ul>
            </div>

        </div>
    )
}

// will need map state to props
const mapStateToProps = (globalState) => {
    return {
        users: globalState.users,
    
    }
}


export default connect(mapStateToProps)(DisplayUsers)
