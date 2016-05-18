// Import React & ReactDOM //
import React from 'react';
import ReactDOM from 'react-dom';
// End Import React & ReactDOM //

// Import Components //
import SearchBar from './components/search_bar';

// End Import Components //


// Save YouTube API_KEY & Import Module //
const API_KEY = 'AIzaSyCeNq13ZJ4p0ImDlD9dyC74eqWdkvIOBgo';
import YTSearch from 'youtube-api-search';
// End YouTube API_KEY & Import Module //

// YTSearch //
YTSearch({key: API_KEY, term: 'young thug'}, function(data) {
  console.log('YouTube Search Results: ',data);
});
// End YTSearch //

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));