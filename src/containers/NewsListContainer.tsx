import React, { useEffect, useState } from 'react';
import { Article } from '../domain/models';
import { fetchNews } from '../useCases/fetchNews';
import { NewsList } from '../components/NewsList';
import { NewsRepository } from '../domain/repositories';
import { fetchNewsAPI } from '../data/NewsAPI';


const NewsListContainer: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selectedArticleIndex, setSelectedArticleIndex] = useState<number | null>(null);

    useEffect(() => {
        const newsRepository: NewsRepository = {
            fetchNews: () => fetchNewsAPI(),
        };

        fetchNews(newsRepository)
            .then((data) => {
                setArticles(data)

            })
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    const handleArticleClick = (index: number) => {
        setSelectedArticleIndex(index);
    };

    return <NewsList articles={articles} onArticleClick={handleArticleClick} selectedArticleIndex={selectedArticleIndex} />;
};

export default NewsListContainer;