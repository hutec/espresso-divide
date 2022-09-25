import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { OverviewPage } from "../components/overview";

export default function Index({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Espresso Divide Overview</title>
      </Head>
      <Container>
        <Intro />
        <OverviewPage posts={allPosts} />
      </Container>
    </Layout>
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
