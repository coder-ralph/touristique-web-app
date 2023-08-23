import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import Loading from './components/Loading';
import AboutUs from './components/AboutUs';


import Article from './pages/Article';
import Home from './pages/Home';
import PostsByCategory from './pages/PostsByCategory';
import SearchResult from './pages/SearchResult';
import { useMyContext } from './context/store';
import Pagination from './components/Pagination';
import ScrollButton from './components/ScrollButton';
import NotFound from './components/NotFound';


const App = () => {
  const { loading, totalPage } = useMyContext()

  return (
    <React.Fragment>
      { loading && <Loading /> }

      <Header />
      <Search />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:slug' element={<PostsByCategory />} />
          <Route path='/search/:slug' element={<SearchResult />} />
          <Route path='/article/:slug' element={<Article />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </main>
      <Pagination totalPage={totalPage} />
      <Footer />
      <ScrollButton />
    </React.Fragment>
  )
}

export default App
