
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {

  // const [data, setData] = useState({
  //   name: null,
  //   email: null
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'http://localhost:8082/api/hello/view/61485e1b9e77a6da2f05c31e',
  //     );

  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);
  // console.log(data.email);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
