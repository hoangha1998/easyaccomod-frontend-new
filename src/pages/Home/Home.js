import React from 'react';
import SlideShow from "./__components/SlideShow/SlideShow";
import Categories from "./__components/Categories/Categories";
import NewPosts from "./__components/NewPosts/NewPosts";

function Home(props) {
  return (
    <div className="home-page page-paper">
      <SlideShow/>

      <Categories/>

      <NewPosts/>
    </div>
  );
}

export default Home;