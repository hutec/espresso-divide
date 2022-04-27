import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import path from "path";

import DateFormatter from "../components/date-formatter";
import PostTitle from "../components/post-title";

const DynamicComponentWithNoSSR = dynamic(() => import("./map-preview"), {
  ssr: false,
});

export default function PostHeader({ title, track, date }) {
  const router = useRouter();
  const downloadUrl = path.join(router.basePath, track);

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <DynamicComponentWithNoSSR track={track} />
        <a href={downloadUrl} className="text-sm text-gray-600 hover:underline">
          Download Track
        </a>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
