import React, { useEffect, useState } from 'react'
import Paper from './Paper';

const PaperList = props => {

  const { papers, showSimilar } = props;
  return (
    <div>
      { papers.map((paper,ix) => {
        return <Paper paper={paper} key={ix} showSimilar={str => showSimilar(str)} />
      })}
    </div>
  )
};

export default PaperList;