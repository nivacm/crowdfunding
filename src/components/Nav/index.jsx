import React from "react";
import { Link } from "react-router-dom";
// We are using an anonymous function, the variable Nav is the anonymous function.
const Nav = () => {

    return(
        <nav>
            <Link to ="/">Home</Link>  
            <Link to="/login">Login</Link>
            <link to="/project">Project</link>
            {/* <div>
                <h1>MigARTion-CREAtion</h1>
            </div> */}
        </nav>
    )

}
export default Nav;