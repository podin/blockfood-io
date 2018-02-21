import React from 'react'
import {Router, Link} from 'react-static'
import Routes from 'react-static-routes'

const App = () => (
    <Router>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/terms">Terms of service</Link>
                <Link to="/privacy">Privacy policy</Link>
            </nav>
            <div className="content">
                <Routes/>
            </div>
        </div>
    </Router>
)

export default App
