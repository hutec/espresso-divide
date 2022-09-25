import dynamic from "next/dynamic";
import path from "path";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

// Compute bounds over all posts/routes
const computeBounds = async (basePath, posts) => {
  // Read the bounds of each post geojson file and combine them
  const overallBounds = await Promise.all(
    posts.map(async (post) => {
      const url = path.join(basePath, post.track);
      const geojsonFile = url.replace(".gpx", ".geojson");
      const res = await fetch(geojsonFile);
      const geojson = await res.json();
      return geojson.bounds;
    })
  ).then((boundsPerStage) => {
    // Merge the bounds of each stage
    return boundsPerStage.reduce(
      (acc, bounds) => {
        acc[0][0] = Math.min(acc[0][0], bounds[0][0]);
        acc[0][1] = Math.min(acc[0][1], bounds[0][1]);
        acc[1][0] = Math.max(acc[1][0], bounds[1][0]);
        acc[1][1] = Math.max(acc[1][1], bounds[1][1]);
        return acc;
      },
      [
        [Infinity, Infinity],
        [-Infinity, -Infinity],
      ]
    );
  });
  return overallBounds;
};

const DynamicComponentWithNoSSR = dynamic(
  () => import("./map-preview").then((mod) => mod.MapOverview),
  {
    ssr: false,
  }
);
export default function OverviewSection({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        <Link href="/overview">
          <a className="hover:underline">Overview</a>
        </Link>
      </h2>
      <div className="h-96">
        <OverviewMap posts={posts} />
      </div>
    </section>
  );
}

export function OverviewPage({ posts }) {
  return (
    <section className="h-[80vh]">
      <div className="h-full">
        <OverviewMap posts={posts} />
      </div>
    </section>
  );
}

export function OverviewMap({ posts }) {
  const [bounds, setBounds] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function compute() {
      const bounds = await computeBounds(router.basePath, posts);
      setBounds(bounds);
    }
    compute();
  }, []);

  return (
    <div className="mb-5 h-full">
      {bounds && <DynamicComponentWithNoSSR posts={posts} bounds={bounds} />}
    </div>
  );
}
