import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Demo1Index from "./demo1/index.jsx";
import Index from "./demo2/index.jsx";
// import Demo3 from './demo3/demo3.jsx';
import Demo4 from './demo4/demo4.jsx';
import Demo5 from "./demo5"
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
                    <li>
                        <Link to='/demo4'>Demo4</Link>
                    </li>
                    <li>
                        <Link to='/demo5'>Demo5</Link>
                    </li>
                </ul>
                <Route path='/demo1' exact component={Demo1Index}></Route>
                <Route path='/demo2' exact component={Index}></Route>
                {/* <Route path='/demo3' exact component={Demo3}></Route> */}
                <Route path='/demo4' exact component={Demo4}></Route>
                <Route path='/demo5' exact component={Demo5}></Route>
            </Router>
        </>
    )
}

export default Page1;