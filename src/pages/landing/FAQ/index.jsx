import React, { useState, useEffect } from 'react';

import url from '../../../urls';
import './styles.scss';

const FAQ = () => {
  const [data, setData] = useState({
    list: [],
  });

  const [isOpen, setOpen] = useState([]);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'faqs').then(r => setData({list: r[0]['QandA']}))
  }, [])

  return (
    <div className="faq">
      <div className="container">
        <h3>Часто задаваемые вопросы</h3>
        {(data.list) &&
          data.list.map((item, index) => {
            return (
              <div key={index} onClick={() => {
                const state = [...isOpen];
                state[index] = !state[index];
                setOpen(state);
              }} className="faq-card">
                <div className="faq-card-content">
                  <div className="question" dangerouslySetInnerHTML={{__html: item.question}} />
                  <div className="expand">
                    {!isOpen[index] ?
                      <img src={require('../../../img/plus.svg')} alt=""/> :
                      <img src={require('../../../img/hide.svg')} alt=""/>
                    }
                  </div>
                </div>
                {isOpen[index] &&
                  <div className="answer" dangerouslySetInnerHTML={{__html: item.answer}} />
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FAQ;
