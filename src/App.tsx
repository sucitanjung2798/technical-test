import React, { useState } from 'react';
import { Card } from 'antd';
import NewsListContainer from './containers/NewsListContainer';
import Algoritma from './Algoritma';
// import NewsDetailContainer from './containers/NewsDetailContainer';
import './App.css'
// import 'antd/dist/antd.css';

const tabList = [
  {
    key: 'tab1',
    label: 'List and Detail View',
  },
  {
    key: 'tab2',
    label: 'Algoritma'
  }
]

const contentList: Record<string, React.ReactNode> = {
  tab1: <NewsListContainer />,
  tab2: <Algoritma />
}

const App: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')

  const onTabChange = (key: string) => {
    setActiveTabKey(key)
  }




  return (
    // <Layout style={{ minHeight: '100vh' }}>
    //   <NewsListContainer />

    // </Layout>

    <Card style={{ width: '100%', fontSize: '20px', fontWeight: 600 }} tabList={tabList} activeTabKey={activeTabKey} onTabChange={onTabChange}>
      <div style={{ fontSize: '20px', fontWeight: 600 }}>
        {contentList[activeTabKey]}
      </div>


    </Card>
  );
};

export default App;