import { List, Space } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import Title from "../components/title";
import Header from '../components/header'
import Footer from '../components/footer'

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

const ResearchReports = () => (
    (
        <div class="Container">
            <Space direction='vertical'>
                <Header location='/researchreports' />
                <Title title='Research Reports' subtitle="This column contains various research reports authored and co-authored by Herbert Jauch since 1998. Most deal with socio-economic issues in Namibia while others address regional, continental or global challenges. The reports are available in pdf format and can be accessed by double clicking on the title(s) below." />
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText key="list-vertical-read-o" />
                            ]}>
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
                <Footer />
            </Space>
        </div>
    )
)
export default ResearchReports