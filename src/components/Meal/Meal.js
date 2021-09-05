import React, { Fragment } from 'react'
import MealSummary from './MealSummary'
import MealList from './MealList'

function Meal() {
    console.log("meal");
    return (
        <Fragment>
            <MealSummary/>
            <MealList/>
        </Fragment>
    )
}

export default React.memo(Meal)
