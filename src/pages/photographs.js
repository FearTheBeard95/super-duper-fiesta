import { Space } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import Title from '../components/title'
import Header from '../components/header'
import Footer from '../components/footer'
import Tabs from '../components/tab'
import Gallery from '../components/gallery'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
const IconText = () => (
    <Space>
        <ReadOutlined />
        Read
    </Space>
);

const ArticlesWorkshopPapers = () => (
    (
        <div class="Container">
            <Space direction="vertical">
            <Header location='/photographs' />
            <Title title="Photographs" subtitle="This column contains various published articles as well as papers presented by Herbert at various workshops, seminars and panel discussions. They are available in pdf format and can be accessed by double-clicking on the title(s) below." />
            <Tabs />
            <Footer />
            </Space>
        </div>
    )
)
export default ArticlesWorkshopPapers