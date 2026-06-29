"use client";

import { StartProjectContent } from "@/app/start-project/page";
import { siteContent } from "@/lib/content";

export default function GreekStartProjectPage() {
  return <StartProjectContent content={siteContent.gr} />;
}
