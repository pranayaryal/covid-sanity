import React from 'react'

const Paper = props => {
  const { paper, showSimilar } = props;
  console.log(paper);
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{paper.rel_title}</p>
            <p className="subtitle is-6">{paper.rel_authors}</p>
          </div>
        </div>

        <div className="content">
          {paper.rel_abs}
          <br />
          <time dateTime="2020-4-4">4 Mar 2020</time>
        </div>
        <button className="button is-primary" onClick={() => showSimilar(paper.rel_doi)}>Show Similar</button>
        <a className="button is-warning" 
          href={`${paper.rel_link}.full.pdf`}
          target="_blank">PDF</a>
      </div>
    </div>

  )
};

export default Paper;

