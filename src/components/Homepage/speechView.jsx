import React from 'react';
import {currentSpeechText, pageView, allSpeeches} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';


const Speech = require('./dummySpeeches.js');

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);


  const handleEdit = (index) => {
    setCurrent(Speech.Speech[index])
    setPage('text')
  }

  const displayHistory = () => {
    console.log('go to history modal')
  }

  return (
    <div>
      <div>
        {speechValue.map((value, index) => {
          console.log(value)
          return (
            <div style={{display: 'flex'}} onClick={displayHistory}>
              <span style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].date}</span>
              <span style={{border: '3px solid black', width: '40vw'}}>{value.title}</span>
              <span key={index} style={{border: '3px solid black'}}>{value.speeches[0].body}</span>
              <button onClick={() => {
                handleEdit(index)
              }}>Edit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;



