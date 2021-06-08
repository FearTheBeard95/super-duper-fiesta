import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ResearchReportsPage from '../pages/ResearchReportsPage'
import OpinionPieces from '../pages/OpinionPieces'
import ArticlesWorkshopPapers from '../pages/ArticlesWorkshopPapers'
import NotFound from '../pages/404Page'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'
import { Layout, Space } from 'antd';

const { Footer } = Layout;
const AppRouter = (props) => (

    <BrowserRouter>
        <div className="container">
            <Space direction="vertical">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/researchreports' component={ResearchReportsPage}/>
                    <Route path='/opinionpieces' component={OpinionPieces} />
                    <Route path='/articlesworkshops' component={ArticlesWorkshopPapers} />
                    <Route component={NotFound} />
                </Switch>
            </Space>
        </div>
    </BrowserRouter>
)

export default AppRouter