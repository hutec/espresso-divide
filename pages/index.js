import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Overview from "../components/overview";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0];
  return (
    <>
      <Layout>
        <Head>
          <title>Espresso Divide Tour Blog</title>
        </Head>
        <Container>
          <Intro />
          <Overview posts={allPosts} />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "track",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
