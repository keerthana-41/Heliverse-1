import React from "react";
import Read from './Users/Read'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Delete from './Users/Delete'
import Insert from './Users/Insert'
// import Update from './Users/Update'

const Users = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Insert} />
                <Route exact path="/insert" component={Read} />

                {/* Add other routes here if needed */}
            </Switch>
        </Router>

    )
}





export default Users

