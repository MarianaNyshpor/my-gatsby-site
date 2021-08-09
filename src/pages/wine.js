import React from 'react';
import { graphql } from 'gatsby';
import WineItem from '../components/Wine.js';

const SingleWinePage = ({ data: { allWine } }) => {
  return (
    <>
      <ul>
        {allWine.nodes.map((wine) => (
          <WineItem key={wine.id} wine={wine} />
        ))}
      </ul>
    </>
  );
};

export default SingleWinePage;

export const query = graphql`
  query($title: String!) {
    allWine(filter: {title: {eq: $title}}) {
      nodes {
        id
        description,
        title,
        points,
        taster_name,
        taster_twitter_handle,
        designation,
        variety,
        region_1,
        province,
        country,
        winery,
        price
      }
    }
  }
`;
