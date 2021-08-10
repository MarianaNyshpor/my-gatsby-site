const WINE_NODE_TYPE = `Wine`
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions;
  const data = {
    wines: [
      {
        points: "87",
        title: "Nicosia 2013 Vulkà Bianco (Etna)",
        description: "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive, offering unripened apple, citrus and dried sage alongside brisk acidity.",
        taster_name: "Kerin O’Keefe",
        taster_twitter_handle: "@kerinokeefe",
        price: null,
        designation: "Vulkà Bianco",
        variety: "White Blend",
        region_1: "Etna",
        region_2: null,
        province: "Sicily & Sardinia",
        country: "Italy",
        winery: "Nicosia"
      },
      {
        points: "87",
        title: "Quinta dos Avidagos 2011 Avidagos Red (Douro)",
        description: "This is ripe and fruity, a wine that is smooth while still structured. Firm tannins are filled out with juicy red berry fruits and freshened with acidity. It's already drinkable, although it will certainly be better from 2016.",
        taster_name: "Roger Voss",
        taster_twitter_handle: "@vossroger",
        price: 15,
        designation: "Avidagos",
        variety: "Portuguese Red",
        region_1: null,
        region_2: null,
        province: "Douro",
        country: "Portugal",
        winery: "Quinta dos Avidagos"
      },
      {
        points: "87",
        title: "Rainstorm 2013 Pinot Gris (Willamette Valley)",
        description: "Tart and snappy, the flavors of lime flesh and rind dominate. Some green pineapple pokes through, with crisp acidity underscoring the flavors. The wine was all stainless-steel fermented.",
        taster_name: "Paul Gregutt",
        taster_twitter_handle: "@paulgwine ",
        price: 14,
        designation: null,
        variety: "Pinot Gris",
        region_1: "Willamette Valley",
        region_2: "Willamette Valley",
        province: "Oregon",
        country: "US",
        winery: "Rainstorm"
      },
      {
        points: "87",
        title: "St. Julian 2013 Reserve Late Harvest Riesling (Lake Michigan Shore)",
        description: "Pineapple rind, lemon pith and orange blossom start off the aromas. The palate is a bit more opulent, with notes of honey-drizzled guava and mango giving way to a slightly astringent, semidry finish.",
        taster_name: "Alexander Peartree",
        taster_twitter_handle: null,
        price: 13,
        designation: "Reserve Late Harvest",
        variety: "Riesling",
        region_1: "Lake Michigan Shore",
        region_2: null,
        province: "Michigan",
        country: "US",
        winery: "St. Julian"
      },
      {
        points: "87",
        title: "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
        description: "Much like the regular bottling from 2012, this comes across as rather rough and tannic, with rustic, earthy, herbal characteristics. Nonetheless, if you think of it as a pleasantly unfussy country wine, it's a good companion to a hearty winter stew.",
        taster_name: "Paul Gregutt",
        taster_twitter_handle: "@paulgwine ",
        price: 65,
        designation: "Vintner's Reserve Wild Child Block",
        variety: "Pinot Noir",
        region_1: "Willamette Valley",
        region_2: "Willamette Valley",
        province: "Oregon",
        country: "US",
        winery: "Sweet Cheeks"
      },
      {
        points: "87",
        title: "Tandem 2011 Ars In Vitro Tempranillo-Merlot (Navarra)",
        description: "Blackberry and raspberry aromas show a typical Navarran whiff of green herbs and, in this case, horseradish. In the mouth, this is fairly full bodied, with tomatoey acidity. Spicy, herbal flavors complement dark plum fruit, while the finish is fresh but grabby.",
        taster_name: "Michael Schachner",
        taster_twitter_handle: "@wineschach",
        price: 15,
        designation: "Ars In Vitro",
        variety: "Tempranillo-Merlot",
        region_1: "Navarra",
        region_2: null,
        province: "Northern Spain",
        country: "Spain",
        winery: "Tandem"
      },
      {
        points: "87",
        title: "Terre di Giurfo 2013 Belsito Frappato (Vittoria)",
        description: "Here's a bright, informal red that opens with aromas of candied berry, white pepper and savory herb that carry over to the palate. It's balanced with fresh acidity and soft tannins.",
        taster_name: "Kerin O’Keefe",
        taster_twitter_handle: "@kerinokeefe",
        price: 16,
        designation: "Belsito",
        variety: "Frappato",
        region_1: "Vittoria",
        region_2: null,
        province: "Sicily & Sardinia",
        country: "Italy",
        winery: "Terre di Giurfo"
      },
      {
        points: "87",
        title: "Trimbach 2012 Gewurztraminer (Alsace)",
        description: "This dry and restrained wine offers spice in profusion. Balanced with acidity and a firm texture, it's very much for food.",
        taster_name: "Roger Voss",
        taster_twitter_handle: "@vossroger",
        price: 24,
        designation: null,
        variety: "Gewürztraminer",
        region_1: "Alsace",
        region_2: null,
        province: "Alsace",
        country: "France",
        winery: "Trimbach"
      },
      {
        points: "87",
        title: "Heinz Eifel 2013 Shine Gewürztraminer (Rheinhessen)",
        description: "Savory dried thyme notes accent sunnier flavors of preserved peach in this brisk, off-dry wine. It's fruity and fresh, with an elegant, sprightly footprint.",
        taster_name: "Anna Lee C. Iijima",
        taster_twitter_handle: null,
        price: 12,
        designation: "Shine",
        variety: "Gewürztraminer",
        region_1: null,
        region_2: null,
        province: "Rheinhessen",
        country: "Germany",
        winery: "Heinz Eifel"
      },
      {
        points: "87",
        title: "Jean-Baptiste Adam 2012 Les Natures Pinot Gris (Alsace)",
        description: "This has great depth of flavor with its fresh apple and pear fruits and touch of spice. It's off dry while balanced with acidity and a crisp texture. Drink now.",
        taster_name: "Roger Voss",
        taster_twitter_handle: "@vossroger",
        price: 27,
        designation: "Les Natures",
        variety: "Pinot Gris",
        region_1: "Alsace",
        region_2: null,
        province: "Alsace",
        country: "France",
        winery: "Jean-Baptiste Adam"
      }
    ]
  }
  
  data.wines.forEach(wine =>
    createNode({
      ...wine,
      id: createNodeId(`${WINE_NODE_TYPE}-${wine.title}`),
      parent: null,
      children: [],
      internal: {
        type: WINE_NODE_TYPE,
        content: JSON.stringify(wine),
        contentDigest: createContentDigest(wine),
      },
    })
  )
  return
}

const turnWinesIntoPages = async ({ graphql, actions }) => {
  const path = require('path');
  const winesTemplate = path.resolve('src/pages/wine.js');

  const { data } = await graphql(`
    query {
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
  `);

  data.allWine.nodes.forEach((wine) => {
    actions.createPage({
    path: `/wines/${wine.title}`,
    component: winesTemplate,
      context: {
        title: wine.title,
      },
    });
  });
}

exports.createPages = async (params) => {
  await turnWinesIntoPages(params);
}
