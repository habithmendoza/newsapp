import React, { useState, useEffect } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Card from '../Card/Card';
import Header from '../Header/Header';

const App = () => {

  const [news, setNews] = useState([]);
  const [sideNav, setSideNav] = useState(false);
  const [category, setCategory] = useState('general');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=0e900685dbcb4a72bdcfbcdf457bcf29`);
        const data = await res.json();
        setIsLoading(false);
        setNews(data.articles);
      } catch {
        alert('Error Fetching')
      }
    }
    fetchNews();
  }, [category])

  const onSideNav = (open) => {
    if (open) {
      setSideNav(true);
    }
  }
  const onCloseSideNav = () => {
    setSideNav(false);
  }

  console.log(news);

  return (
    <div className="App">
      <div className={sideNav ? 'overlay' : ''}>
        <div className={sideNav ? 'sideNav active' : 'sideNav'}>
          <div onClick={onCloseSideNav} className='close-sideNav'>
            <div className='ico-close'></div>
            <div className='logo-sideNav'></div>
          </div>
          <div className='category-wrapper'>
            <h5>CATEGORIAS</h5>
            <ul onClick={() => setSideNav(false)}>
              <li className='category-item' onClick={() => setCategory('general')}>General</li>
              <li className='category-item' onClick={() => setCategory('business')}>Negocios</li>
              <li className='category-item' onClick={() => setCategory('science')}>Ciencia</li>
              <li className='category-item' onClick={() => setCategory('technology')}>Tecnología</li>
              <li className='category-item' onClick={() => setCategory('health')}>Salud</li>
              <li className='category-item' onClick={() => setCategory('entertainment')}>Entretenimiento</li>
            </ul>
          </div>
        </div>
      </div>
      <Header
        onSideNav={onSideNav}
        isLoading={isLoading}
        category={category}
      />
      <div className='App-card-wrapper'>

        {news.map(article => (
          <Card
            key={uuid()}
            article={article}
          />
        ))}
      </div>
    </div >
  );
}

export default App;
