import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Demo1Index from "./demo1/index.jsx";
import Index from "./demo2/index.jsx";

function Page1() {
    return (
        <>
            <Router>
                <ul>
                    <li>
                        <Link to='/demo1'>Demo1</Link>
                    </li>
                    <li>
                        <Link to='/demo2'>Demo2</Link>
                    </li>
                </ul>
                <Route path='/demo1' exact component={Demo1Index}></Route>
                <Route path='/demo2' exact component={Index}></Route>
            </Router>
        </>
    )
}

export default Page1;