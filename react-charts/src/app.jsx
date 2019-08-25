import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import DynamicBarChart from './components/dynamic-bar-chart'
import helpers from './utils'
import mocks from './mock'

const App = props => {

    return <div>
      <DynamicBarChart
        barGapSize={10}
        data={helpers.generateData(100, mocks.defaultChart, {
          prefix: "Iteration"
        })}
        barHeight={20}
        iterationTimeout={100}
        showTitle={true}
        startRunningTimeout={2500}
      />
    </div>
}



ReactDOM.render(<App />, document.getElementById("root"))
