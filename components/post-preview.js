import dynamic from "next/dynamic";

import DateFormatter from "../components/date-formatter";
import Link from "next/link";

const DynamicComponentWithNoSSR = dynamic(() => import("./map-preview"), {
  ssr: false,
});
export default function PostPreview({ title, date, excerpt, slug, track }) {
  return (
    <div>
      <div className="mb-5">
        <DynamicComponentWithNoSSR track={track} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
