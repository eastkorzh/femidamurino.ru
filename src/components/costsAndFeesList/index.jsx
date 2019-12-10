import React from 'react';

import s from './styles.module.scss';

const CostsAndFeesList = (props) => {
  const { data } = props;

  return (
    <div id='costsList' className={s.container}>
      <h3>Стоимость услуг</h3>
      <div className={s.costsWrapper}>
        <div className={s.costsList}>
          {(data && data.costsList) && data.costsList.map((item, index) => {
            return (
              <div key={index} className={s.item}>
                <div className={s.name}>{item.name}</div>
                {item.oldPrice ? 
                  <div className={s.promo}>
                    <div className={s.oldPrice}>{item.oldPrice} ₽</div>
                    <div className={s.price}>{item.price} ₽</div>
                  </div> :
                  <div className={s.price}>{item.price} ₽</div>
                }
              </div>
            )
          })}
        </div>
        {(data && data.feesList) && 
          <h3>Налоги и госпошлины</h3>
        }
        <div className={s.feesList}>
          {(data && data.feesList) && data.feesList.map((item, index) => {
            return (
              <div key={index} className={s.item}>
                <div className={s.name}>{item.name}</div>
                <div className={s.price}>{item.price} ₽</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CostsAndFeesList;
