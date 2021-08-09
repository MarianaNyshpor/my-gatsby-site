import React from 'react';
import '../../styles.scss';

const WineItem = ({ wine }) => {
  return (
    <div className="site-wine-items">
      <p className="site-wine-theme"></p>
      <a href={`/${wine.title}`}>
      <h2 className="site-wine-item-line">{wine.title}</h2>
      </a>
      <p className="site-wine-item-line">
        <span className="site-wine-item-grapes-icon site-wine-item-icon"></span>
        <span className="site-wine-item-italic">{wine.designation} {wine.variety}</span>
      </p>
      <p className="site-wine-item-line">{wine.description}</p>
      <p className="site-wine-item-line site-wine-item-italic">
        <span>{wine.region_1} - {wine.province} - {wine.country} - {wine.winery}</span>
      </p>
      <p className="site-wine-item-line">
        <span className="site-wine-item-number site-wine-item-line-points">{wine.points}</span>
        <span className="site-wine-item-line-points site-wine-item-points-icon site-wine-item-icon"></span>
        <span className="site-wine-item-line-points"> By: {wine.taster_name} {wine.taster_twitter_handle} </span>
        <span className="site-wine-item-line-price site-wine-item-number">{wine.price}</span>
        {
          wine.price && (<span className="site-wine-item-price-icon site-wine-item-icon site-wine-item-line-price"></span>)
        }
      </p>
    </div>
  );
};

export default WineItem;
