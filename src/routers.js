import React from 'react'
import { Route, Switch } from 'react-router'
import { HiddenFriendsPage } from './views/HiddenFriendsPage'
import { PrivacyPolicyPage } from './views/PrivacyPolicyPage'
import { TermsOfServicePage } from './views/TermsOfServicePage'
import { Page404 } from './components/ErrorPages'

export const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={HiddenFriendsPage} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route
                exact
                path="/terms-of-service"
                component={TermsOfServicePage}
            />
            <Route component={Page404} />
        </Switch>
    )
}
