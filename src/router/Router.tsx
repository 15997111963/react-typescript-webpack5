import React from "react"
import UserStore from "@/store/UserStore"
import Page from "@/pages/Page"

import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"

export default () => (
    <Router>
        <React.Suspense fallback={false}>
            <Switch>
                <Route exact path="/login" component={React.lazy(() => import("@/pages/Login"))} />
                <Route
                    path="/"
                    render={() =>
                        UserStore.login ?
                            <Page>
                                
                            </Page> :
                            <Redirect to="/login" />
                    }
                />
            </Switch>
        </React.Suspense>
    </Router>
)
