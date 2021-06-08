import { List, Space } from 'antd';
import {ReadOutlined } from '@ant-design/icons';
import Title from '../components/title'
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

const OpinionPieces = () => (
    (
        <div class="Container">
            <Space direction='vertical'>
            <Header location='/opinionpieces' />
            <Title title="Opinion Pieces" subtitle="Here you will find a variety of Herbert's commentaries written since 2002. They cover a range of social, political and economic issues and were published in various newspapers and magazines. The articles are available in pdf format and can be accessed by double clicking on the title(s) below." />
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
                        ]}
                        // extra={
                        //     <img
                        //         width={272}
                        //         alt="logo"
                        //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        //     />
                        // }
                    >
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
export default OpinionPieces