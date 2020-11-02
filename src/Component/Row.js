import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React from "react";
import About from "./About";
import Delete from "./Delete";

// All the row fetch with the API of randomuser
const Row = ({user}) => (
    <Router>
        <tr>
            {/* We use the var created in fetchUser and send in Table() function*/}
            <td><img src={user.picture} alt=""/></td>
            <td><Link to="/about" style={{
                color:"green"
            }}>{user.firstName} {user.lastName}</Link></td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>
                <Link to="/" style={{
                    color:"red"
                }}>Fermer
                </Link>
            </td>
        </tr>

        <Switch>
            <Route exact path="/about">
                <About user={user} />
            </Route>
            <Route exact path="/">
                <Delete user={user} />
            </Route>
        </Switch>
    </Router>
);

export default Row;