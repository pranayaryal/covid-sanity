import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';

import Navbar from './components/Navbar';
import PaperList from './components/PaperList';

const App = () => {
  const [papers, setPapers] = useState([]);
  const [numPapers, setNumPapers] = useState(0);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setPapers([]);
    setNumPapers(0);
    const getPapers = async () => {
      await axios.get('/papers')
        .then(res => {
          setPapers(res.data.papers);
          setNumPapers(res.data.num_papers);
          setSortOrder(res.data.sort_order);
        })
        .catch(err => {
          //setPapers({});
          console.log(`[Error] - ${err}`)
        })
    }
    getPapers();

  }, []);

  const search = async (e) => {
    const qString = e.target.value;
    await axios.get(`/search?q=${qString}`)
      .then(res => {
        setPapers(res.data.papers);
        setNumPapers(res.data.num_papers);
        setSortOrder(res.data.sort_order);
      })
      .catch(err => {
        //setPapers({});
        console.log(`[Error] - ${err}`)
      })
  };

  const showSimilar = async (doi) => {
    const first = doi.split("/")[0];
    const second = doi.split("/")[1];
    console.log('you are in show similar');
    await axios.get(`/sim/${first}/${second}`)
      .then(res => {
        setPapers(res.data.papers);
        setNumPapers(res.data.num_papers);
        setSortOrder(res.data.sort_order);
      })
      .catch(err => {
        //setPapers({});
        console.log(`[Error] - ${err}`)
      })

  };

  const keyPressed = (ev) => {
    if (ev.key === 'Enter') {
      search(ev);
    }
  }

  return (
    <div>
      <Navbar len={numPapers} />
      <div className="container">
        <div className="content">
          <h4 className="is-medium">Showing latest papers</h4>
        </div>
        <div className="columns">
          <div className="column is two-thirds">
            <input className="input" type="text" placeholder="Search Papers" onKeyPress={e => keyPressed(e)}></input>
          </div>
          <div className="column">
            <button className="button is-warning" onClick={e => search(e)}>Search </button>
          </div>
        </div>
        {papers && <PaperList papers={papers} showSimilar={showSimilar} />}
      </div>
    </div>
  );
}

export default App;
