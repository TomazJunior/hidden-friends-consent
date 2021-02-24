import { BrowserRouter as Router } from 'react-router-dom'
import { Routers } from './routers'

export const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Routers></Routers>
    </Router>
)
