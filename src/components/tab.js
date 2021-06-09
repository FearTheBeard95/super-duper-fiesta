import { Tabs } from 'antd';
import Gallery from '../components/gallery'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Tab = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Education" key="1">
      <Gallery />
    </TabPane>
    <TabPane tab="Namibian Trade Unions8" key="2">
      <Gallery />
    </TabPane>
    <TabPane tab="Ramatex Working Conditions and the Strike of 2006" key="3">
      <Gallery />
    </TabPane>
  </Tabs>
);

export default Tab