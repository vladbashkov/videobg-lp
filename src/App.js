import './App.css';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';

function App() {
  const src = 'https://youtu.be/RJl9pRtEYoU',
        [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header-title">
          Video background LP
        </h2>
      </header>
      <main className="App-body">
        <ReactPlayer 
          url={ src } 
          playing={ play }
          loop={ true }
          muted={ true }
          className="bg-video"
          width={ '100vw' }
          height={ '100vh' }
        />
        <div className="App-content">
          <p
            className='App-paragraph'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore, eum, repudiandae laudantium rem assumenda officiis, exercitationem aperiam voluptatum soluta neque optio quod sunt libero voluptates corporis consectetur tenetur quae?
          </p>
          <p
            className='App-paragraph'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi pariatur nulla suscipit quo sed? In, quisquam magni autem excepturi natus id porro quod. Sint rem possimus dicta architecto! Distinctio.
          </p>
          <p
            className='App-paragraph hide'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptates quibusdam in aspernatur veritatis, deserunt ullam voluptatem culpa ad ab laudantium reprehenderit id facere. Quas qui quasi libero facere voluptas?
          </p>
          <p
            className='App-paragraph hide'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam sint soluta cupiditate totam eum temporibus facilis excepturi ex omnis qui officia asperiores aliquam quibusdam maiores quis dolorem, distinctio rem.
          </p>
          <p
            className='App-paragraph hide'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis harum delectus ea quaerat sapiente non asperiores dicta eius consectetur cumque inventore debitis, ex expedita beatae omnis, qui exercitationem pariatur.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
