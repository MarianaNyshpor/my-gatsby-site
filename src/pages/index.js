import * as React from "react";
import WineItem from "../components/Wine.js";
import { graphql } from "gatsby";

const HomePage = ({ data }) => {
  return (
    <section className="site-wine-list">
      {data.allWine.nodes.map(wine => (
        <WineItem key={wine.id} wine={wine} />
      ))}
    </section>
  );
};

export default HomePage;

export const query = graphql`
  {
    allWine {
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
