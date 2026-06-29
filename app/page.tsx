import { HomePage } from "@/components/HomePage";
import { siteContent } from "@/lib/content";

export default function Home() {
  return <HomePage content={siteContent.en} />;
}
