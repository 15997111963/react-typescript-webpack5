import React from "react"
import { Route } from "react-router-dom"

export default (
    <React.Fragment>
        <Route exact path="/market/paylog" component={require("@/pages/Market/PayLog").default} />
        <Route exact path="/market/order" component={require("@/pages/Market/Order").default} />
    </React.Fragment>
)