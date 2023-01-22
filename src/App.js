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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis asperiores vitae at ullam sequi enim magni eligendi esse alias. Atque consectetur quas dolorum expedita recusandae doloremque quidem, eveniet et.<br/>
          Suscipit eum earum ut accusantium numquam. Dignissimos iusto ducimus at cumque qui odit dolore ullam eius inventore tempora eveniet omnis error sint, rem incidunt ipsa harum aut nesciunt quasi nihil?<br/>
          Architecto, neque qui id quod accusamus natus officiis a reiciendis quasi saepe nemo rem ratione inventore, velit quae eligendi et magnam, sed dolores repellat quas officia voluptates. Corporis, facilis quaerat?<br/>
          Accusamus ad beatae ut rem neque vero quaerat asperiores perspiciatis nobis! Esse, dolores consectetur illo beatae tempore quo dolore libero, inventore recusandae nam fuga laborum iste incidunt, ipsam sit facere!<br/>
          Esse provident laboriosam aliquam numquam ab perspiciatis. Voluptatem temporibus nisi deserunt aliquid dignissimos cupiditate natus atque? Excepturi, deleniti? Consequatur porro veritatis molestiae fugiat reprehenderit magnam velit in aliquid error sint?<br/>
        </div>
      </main>
    </div>
  );
}

export default App;
