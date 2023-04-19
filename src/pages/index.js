import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost {
        nodes {
          title
        }
      }
    }
  `);

  const posts = data.allSanityPost.nodes;
  console.log(posts);
  return <>{posts[0].title}</>;
};

export default IndexPage;
