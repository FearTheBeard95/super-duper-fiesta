import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ResearchReportsPage from '../pages/ResearchReportsPage'
import OpinionPieces from '../pages/OpinionPieces'
import ArticlesWorkshopPapers from '../pages/ArticlesWorkshopPapers'
import Photographs from '../pages/photographs'
import NotFound from '../pages/404Page'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../App.css'
import { Space } from 'antd'

const AppRouter = (props) => (

    <BrowserRouter>
        <div className="container">
            <Space direction="vertical">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/researchreports' component={ResearchReportsPage}/>
                    <Route path='/opinionpieces' component={OpinionPieces} />
                    <Route path='/articlesworkshops' component={ArticlesWorkshopPapers} />
                    <Route path='/photographs' component={Photographs} />
                    <Route component={NotFound} />
                </Switch>
            </Space>
        </div>
    </BrowserRouter>
)

export default AppRouter