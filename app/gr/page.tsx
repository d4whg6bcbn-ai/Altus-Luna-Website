import type { Metadata } from "next";

import { HomePage } from "@/components/HomePage";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Altus Luna | Βίντεο με Drone, Μοντάζ & Ιστοσελίδες στην Κύπρο",
  description:
    "Premium κινηματογραφικές λήψεις με drone, εναέρια κινηματογράφηση, επεξεργασία βίντεο, σχεδιασμός ιστοσελίδων και περιεχόμενο για κοινωνικά δίκτυα για επιχειρήσεις στην Κύπρο.",
  alternates: {
    canonical: "/gr",
    languages: {
      en: "/",
      el: "/gr",
    },
  },
  openGraph: {
    title: "Altus Luna | Βίντεο με Drone, Μοντάζ & Ιστοσελίδες στην Κύπρο",
    description:
      "Premium κινηματογραφικές λήψεις με drone, εναέρια κινηματογράφηση, επεξεργασία βίντεο, σχεδιασμός ιστοσελίδων και περιεχόμενο για κοινωνικά δίκτυα για επιχειρήσεις στην Κύπρο.",
    url: "https://altusluna.com/gr",
  },
};

export default function GreekHome() {
  return <HomePage content={siteContent.gr} />;
}
