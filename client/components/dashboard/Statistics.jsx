import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DisplayTimeBig from '../subcomponents/DisplayTimeBig'

function Statistics(props) {

    const costReducer = (accumulator, currentValue) => accumulator + currentValue.cost
    const timeReducer = (accumulator, currentValue) => accumulator + (currentValue.end_time - currentValue.start_time)

    const totalCost = props.meetingsHistory.reduce(costReducer, 0)
    let totalTime = props.meetingsHistory.reduce(timeReducer, 0)

    const totalMeetings = props.meetingsHistory.length




    return <div className="history section">
        <div className="page-title">
            <h2>Statistics</h2>
        </div>
        {
            props.meetingsHistory.length > 0 ?
                <div className="dashboard__grid">

                    <div className="ring__wrapper ring__wrapper--statistic">
                        <div className="ring ring--statistic">
                            <div className="ticker">
                                <h3>Total Cost</h3>
                                {/* <p>By attending meetings, {props.user.first_name} has cost</p> */}
                                <p className="cost statistic">${totalCost.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="ring__wrapper ring__wrapper--statistic">
                        <div className="ring ring--statistic">
                            <div className="ticker">
                                <h3>Total Time</h3>
                                <p className="statistic"><DisplayTimeBig runtime={totalTime} /> </p>
                            </div>
                        </div>
                    </div>

                    <div className="ring__wrapper ring__wrapper--statistic">
                        <div className="ring ring--statistic">
                            <div className="ticker">
                                <h3>Meeting Count</h3>
                                <p className="statistic"><span className="statistic__text">{totalMeetings}</span> meetings</p>
                            </div>
                        </div>
                    </div>

                </div>

                :
                <p>
                    Nothing to see here yet! <Link to="/meeting" className="link">Start a new meeting.</Link>
                </p>
        }
    </div>
}

function mapStateToProps(globalState) {
    return {
        meetingsHistory: globalState.meetingsHistory,
        user: globalState.auth.user,
    }
}

export default connect(mapStateToProps)(Statistics)