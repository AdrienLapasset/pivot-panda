import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "components/Layout";

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allSanityPost {
  //       nodes {
  //         title
  //       }
  //     }
  //   }
  // `);

  // const posts = data.allSanityPost.nodes;
  // console.log(posts);
  return (
    <Layout>
      {/* {posts[0].title}; */}
      toto
    </Layout>
  );
};

export default IndexPage;
