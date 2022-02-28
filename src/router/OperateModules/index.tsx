import React from "react"
import { Route } from "react-router-dom"

export default (
    <React.Fragment>
        <Route exact path="/operate/log" component={require("@/pages/Operate/Log").default} />
    </React.Fragment>
)
