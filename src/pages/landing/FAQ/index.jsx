import React, { useState, useEffect } from 'react';

import url from '../../../urls';
import './styles.scss';

const FAQ = () => {
  const [data, setData] = useState({
    list: [],
  });

  const [isOpen, setOpen] = useState([]);

  const [repeate, setRepeate] = useState(false);

  const [heights, setHeights] = useState([]);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'faqs').then(r => setData({list: r[0]['QandA']}))
  }, [])

  const expandedElem = React.createRef();
  
  useEffect(() => {
    if (expandedElem.current !== null) {
      if (repeate) {
        for (let i = 0; document.getElementById(`card-${i}`) !== null; i++) {
          if (!heights[i]) {
            const expanded = document.getElementById(`card-${i}`);
            const collapsed = document.getElementById(`collapsed-card-${i}`);
  
            const expandedH = expanded.scrollHeight;
            const collapsedH = collapsed.scrollHeight;

            expanded.style.height = collapsedH + 'px';

            const newHeights = [...heights];
            newHeights[i] = {
              expandedH,
              collapsedH 
            }
            setHeights(newHeights);
          }
        }
      }
      if (repeate === false) setRepeate(true);
    }
  }, [expandedElem, repeate, heights])


  const expandToggle = (i) => {
    const expanded = document.getElementById(`card-${i}`);

    if (isOpen[i]) {
      expanded.style.height = heights[i].collapsedH + 'px';
    } else {
      expanded.style.height = heights[i].expandedH + 'px';
    }
  }

  return (
    <div id="faq" className="faq">
      <div className="container">
        <h3>Часто задаваемые вопросы</h3>
        {(data.list) &&
          data.list.map((item, index) => {
            return (
              <div 
                id={`card-${index}`}
                key={index} 
                className="faq-card"
                ref={expandedElem}
              >
                <div id={`collapsed-card-${index}`} className="faq-card-content">
                  <div className="question" dangerouslySetInnerHTML={{__html: item.question}} />
                  <div 
                    className="expand"
                    onClick={() => {
                      expandToggle(index);
                      const state = [...isOpen];
                      state[index] = !state[index];
                      setOpen(state);
                    }} 
                  >
                    {!isOpen[index] ?
                      <img src={require('../../../img/plus.svg')} alt=""/> :
                      <img src={require('../../../img/hide.svg')} alt=""/>
                    }
                  </div>
                </div>
                <div id={`answer-${index}`} className="answer" dangerouslySetInnerHTML={{__html: item.answer}} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FAQ;
