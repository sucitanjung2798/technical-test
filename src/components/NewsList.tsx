import React, { useState } from "react";
import { Card, Modal } from "antd";
import { Article } from "../domain/models";

const { Meta } = Card

interface NewsListProps {
    articles: Article[]
    onArticleClick: (index: number) => void
    selectedArticleIndex: number | any
}

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Three columns of equal width
    gap: '16px', // Gap between grid items
    padding: 100, // Padding for the container
};

const templateImage = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'





export const NewsList: React.FC<NewsListProps> = ({ articles, onArticleClick, selectedArticleIndex }) => {
    const [open, setOpen] = useState<boolean>(false)

    const filteredArray = [...articles]

    const filtered = filteredArray.filter((_, index) =>
        index === selectedArticleIndex
    );

    console.log(filtered)





    return (
        <div style={{ width: '100%' }}>
            <div style={containerStyle}>
                {articles.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card onClick={() => {
                            setOpen(true)
                            onArticleClick(index)
                        }} hoverable style={{ width: 240 }} cover={<img alt="example" src={item.urlToImage || templateImage} />}>
                            <Meta style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }} title={item?.author || "Europe Steer Bar"} description={item?.source?.name || "instagram"} />
                        </Card>
                    </div>

                ))}
            </div>
            <Modal title={(<span style={{ fontSize: '25px' }}>Detail</span>)} style={{ fontSize: '20px' }} centered open={open} onOk={() => setOpen(false)} onCancel={() => {
                setOpen(false)
            }} width={1000}>
                {filtered.map((item, index) => (
                    <div key={index}>
                        <div style={{ display: 'flex', gap: '20px', flexDirection: 'row' }}>
                            <img alt="templateImage" src={item.urlToImage} width={300} style={{ borderRadius: '10px', border: '1px' }} />
                            <div>
                                <div style={{ fontSize: '20px', fontWeight: 600 }}>{item.author || "Europe Steer Bar"}</div>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                                <div>{item.content}</div>

                            </div>
                        </div>
                    </div>
                ))}

            </Modal>
        </div>





    )
}