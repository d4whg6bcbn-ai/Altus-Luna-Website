export type Language = "en" | "gr";

export type SiteContent = {
  language: Language;
  alternateHref: string;
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    startProject: string;
    ariaLabel: string;
    footerAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    stats: [string, string][];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      label: string;
      title: string;
      description: string;
      details: string;
    }[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      category: string;
      description: string;
      image: string;
      alt: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    tags: string[];
    description: string;
    button: string;
  };
  footer: {
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    closeAriaLabel: string;
    fields: {
      name: string;
      business: string;
      email: string;
      phone: string;
      service: string;
      contactMethod: string;
      message: string;
    };
    placeholders: {
      name: string;
      business: string;
      email: string;
      phone: string;
      service: string;
      contactMethod: string;
      message: string;
    };
    serviceOptions: string[];
    contactMethods: string[];
    submit: string;
  };
  thankYou: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
};

const sharedWorkImages = {
  drone: "/images/Drone in Nature - Mountains & Sea.png",
  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  property:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    language: "en",
    alternateHref: "/gr",
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
      startProject: "Start a project",
      ariaLabel: "Main navigation",
      footerAriaLabel: "Footer navigation",
    },
    hero: {
      eyebrow: "Altus Luna creative media",
      title: "Cinematic visuals for brands ready to be seen with more depth.",
      description:
        "Drone shooting, aerial filming, video editing, website builds, and social content for local businesses, property professionals, service brands, and teams that need stronger online presence.",
      primaryCta: "Explore services",
      secondaryCta: "Plan a project",
      imageAlt: "Moonlit city skyline with a drone silhouette",
      stats: [
        ["Drone", "Aerial filming with scale and atmosphere"],
        ["Edit", "Polished cuts for web, reels, and launch assets"],
        ["Web", "Clean websites and social-ready visual systems"],
      ],
    },
    services: {
      eyebrow: "Services",
      title: "A connected production toolkit for sharper online presence.",
      description:
        "Altus Luna helps businesses capture what they do, shape it into useful content, and present it through websites and social channels that feel cinematic, credible, and human.",
      items: [
        {
          label: "Air",
          title: "Drone shooting / aerial filming",
          description:
            "Smooth aerial footage for properties, projects, venues, outdoor work, and businesses that need scale and context.",
          details:
            "Planning, drone capture, smooth movement, location-focused shots",
        },
        {
          label: "Cut",
          title: "Video editing",
          description:
            "Clean, polished edits that turn raw footage into clear stories for websites, reels, listings, and campaigns.",
          details: "Reels, project highlights, captions, pacing, delivery formats",
        },
        {
          label: "Web",
          title: "Web design / website builds",
          description:
            "Light, modern websites for local businesses, property teams, service brands, and owner-led companies.",
          details:
            "Page structure, copy direction, responsive design, launch-ready build",
        },
        {
          label: "Post",
          title: "Social media content",
          description:
            "Practical visual content for brands that want to stay visible without posting for the sake of it.",
          details:
            "Short-form videos, post ideas, simple content rhythm, platform-ready assets",
        },
      ],
    },
    work: {
      eyebrow: "Work preview",
      title:
        "Formats built for properties, service businesses, and practical online visibility.",
      description:
        "A first portfolio can stay honest: these are the kinds of assets Altus Luna is designed to create, not inflated case studies.",
      items: [
        {
          title: "Aerial project showcase",
          category: "Drone and edit package",
          description:
            "Aerial shots, detail footage, and a clean short edit that shows the scale, setting, and finish of real work.",
          image: sharedWorkImages.drone,
          alt: "Aerial view of sea and mountains captured by drone",
        },
        {
          title: "Local business website",
          category: "Web design",
          description:
            "A clear site structure, natural copy, and a warm visual system that helps visitors understand the service quickly.",
          image: sharedWorkImages.workspace,
          alt: "Warm modern workspace with desks, plants, and natural light",
        },
        {
          title: "Property content set",
          category: "Real estate support",
          description:
            "Short-form video, simple post assets, and website-ready visuals for agents, property teams, and place-based brands.",
          image: sharedWorkImages.property,
          alt: "Bright Mediterranean villa terrace with pool and outdoor landscaping",
        },
      ],
    },
    about: {
      eyebrow: "About Altus Luna",
      title:
        "Hands-on creative support for businesses that need stronger visuals without the inflated agency feeling.",
      paragraphs: [
        "Altus Luna is built for practical visual work: the aerial shot that shows scale, the edit that makes a business feel active, the website that explains the offer, and the content that keeps a brand present online.",
        "The style is calm, considered, and local-first, with room for the warmth of Cyprus places, people, properties, services, and small business stories.",
      ],
    },
    cta: {
      eyebrow: "Contact",
      title:
        "Have a project, property, service, or brand that needs to look sharper online?",
      tags: ["Drone footage", "Video edits", "Websites", "Social content"],
      description:
        "Share what you need captured, edited, designed, or published. Altus Luna can help turn the work you already do into clear visuals and a stronger web presence.",
      button: "Start your project form",
    },
    footer: {
      description:
        "Drone filming, video editing, social content, and websites for Cyprus businesses, property professionals, and service brands that want to look clear, cinematic, and credible online.",
    },
    form: {
      eyebrow: "Start a project",
      title: "Tell me what you need and I'll get back to you shortly.",
      description:
        "This form is the quickest way to share your business, the kind of work you need, and how you'd prefer to be contacted.",
      location:
        "Based in Cyprus, working across drone, edit, web, and social content.",
      email: "Email: pawel@altusluna.com",
      phone: "Phone / WhatsApp: +35797492264",
      closeAriaLabel: "Close form",
      fields: {
        name: "Name",
        business: "Business name",
        email: "Email",
        phone: "Phone or WhatsApp number",
        service: "Service needed",
        contactMethod: "Preferred contact method",
        message: "Project details / message",
      },
      placeholders: {
        name: "Your name",
        business: "Your business",
        email: "you@example.com",
        phone: "+357...",
        service: "Select a service",
        contactMethod: "Choose contact method",
        message:
          "Tell me about the project, timeline, and what kind of help you need.",
      },
      serviceOptions: [
        "Drone shooting / aerial filming",
        "Video editing",
        "Web design / website build",
        "Social media content creation",
        "Not sure yet / need advice",
      ],
      contactMethods: ["Email", "Phone", "WhatsApp"],
      submit: "Send project details",
    },
    thankYou: {
      eyebrow: "Message sent",
      title:
        "Thank you - your message has been sent. I'll get back to you shortly.",
      description:
        "If your project is time-sensitive, you can also email pawel@altusluna.com or reach out on WhatsApp at +35797492264.",
      button: "Back to homepage",
    },
  },
  gr: {
    language: "gr",
    alternateHref: "/",
    nav: {
      services: "Υπηρεσίες",
      work: "Δουλειά",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      startProject: "Ξεκινήστε έργο",
      ariaLabel: "Κύρια πλοήγηση",
      footerAriaLabel: "Πλοήγηση υποσέλιδου",
    },
    hero: {
      eyebrow: "Altus Luna δημιουργικά μέσα",
      title:
        "Κινηματογραφικό οπτικό υλικό για επιχειρήσεις που θέλουν να ξεχωρίζουν με περισσότερη ουσία.",
      description:
        "Λήψεις με drone, εναέρια κινηματογράφηση, επεξεργασία βίντεο, κατασκευή ιστοσελίδων και περιεχόμενο για κοινωνικά δίκτυα για τοπικές επιχειρήσεις, επαγγελματίες ακινήτων, επιχειρήσεις υπηρεσιών και ομάδες που χρειάζονται πιο δυνατή διαδικτυακή παρουσία.",
      primaryCta: "Δείτε τις υπηρεσίες",
      secondaryCta: "Σχεδιάστε ένα έργο",
      imageAlt: "Νυχτερινό αστικό τοπίο με σιλουέτα drone",
      stats: [
        ["Drone", "Εναέρια κινηματογράφηση με κλίμακα και ατμόσφαιρα"],
        ["Μοντάζ", "Καθαρές επεξεργασίες για ιστοσελίδες, σύντομα βίντεο και υλικό λανσαρίσματος"],
        [
          "Ιστοσελίδες",
          "Καθαρές ιστοσελίδες και οπτικά συστήματα έτοιμα για κοινωνικά δίκτυα",
        ],
      ],
    },
    services: {
      eyebrow: "Υπηρεσίες",
      title:
        "Ένα ολοκληρωμένο σύνολο εργαλείων παραγωγής για πιο δυνατή διαδικτυακή παρουσία.",
      description:
        "Η Altus Luna βοηθά επιχειρήσεις να αποτυπώσουν αυτό που κάνουν, να το μετατρέψουν σε χρήσιμο περιεχόμενο και να το παρουσιάσουν μέσα από ιστοσελίδες και κοινωνικά κανάλια που μοιάζουν κινηματογραφικά, αξιόπιστα και ανθρώπινα.",
      items: [
        {
          label: "Αέρας",
          title: "Drone λήψεις / εναέρια κινηματογράφηση",
          description:
            "Ομαλές εναέριες λήψεις για ακίνητα, έργα, χώρους, εξωτερικές εργασίες και επιχειρήσεις που χρειάζονται κλίμακα και πλαίσιο.",
          details:
            "Σχεδιασμός, λήψεις με drone, ομαλή κίνηση, λήψεις με έμφαση στην τοποθεσία",
        },
        {
          label: "Μοντάζ",
          title: "Επεξεργασία βίντεο",
          description:
            "Καθαρά, προσεγμένα μοντάζ που μετατρέπουν το ακατέργαστο υλικό σε ξεκάθαρες ιστορίες για ιστοσελίδες, σύντομα βίντεο, καταχωρίσεις και καμπάνιες.",
          details:
            "Σύντομα βίντεο, στιγμιότυπα έργων, υπότιτλοι, ρυθμός, μορφές παράδοσης",
        },
        {
          label: "Ιστός",
          title: "Σχεδιασμός / κατασκευή ιστοσελίδων",
          description:
            "Φωτεινές, μοντέρνες ιστοσελίδες για τοπικές επιχειρήσεις, ομάδες ακινήτων, επιχειρήσεις υπηρεσιών και εταιρείες με προσωπική παρουσία ιδιοκτήτη.",
          details:
            "Δομή σελίδων, κατεύθυνση κειμένου, προσαρμοστικός σχεδιασμός, κατασκευή έτοιμη για δημοσίευση",
        },
        {
          label: "Δίκτυα",
          title: "Περιεχόμενο για κοινωνικά δίκτυα",
          description:
            "Πρακτικό οπτικό περιεχόμενο για επιχειρήσεις που θέλουν να παραμένουν ορατές χωρίς να δημοσιεύουν απλώς για να δημοσιεύουν.",
          details:
            "Σύντομα βίντεο, ιδέες για δημοσιεύσεις, απλός ρυθμός περιεχομένου, υλικό έτοιμο για κάθε πλατφόρμα",
        },
      ],
    },
    work: {
      eyebrow: "Δείγμα δουλειάς",
      title:
        "Μορφές περιεχομένου σχεδιασμένες για ακίνητα, επιχειρήσεις υπηρεσιών και πρακτική διαδικτυακή προβολή.",
      description:
        "Ένα πρώτο χαρτοφυλάκιο μπορεί να παραμένει ειλικρινές: αυτά είναι τα είδη υλικού που η Altus Luna έχει σχεδιαστεί να δημιουργεί, όχι υπερβολικές παρουσιάσεις έργων.",
      items: [
        {
          title: "Εναέρια παρουσίαση έργου",
          category: "Πακέτο drone και μοντάζ",
          description:
            "Εναέριες λήψεις, λεπτομέρειες και ένα καθαρό σύντομο μοντάζ που δείχνει την κλίμακα, το περιβάλλον και το τελικό αποτέλεσμα πραγματικής δουλειάς.",
          image: sharedWorkImages.drone,
          alt: "Εναέρια θέα θάλασσας και βουνών τραβηγμένη με drone",
        },
        {
          title: "Ιστοσελίδα τοπικής επιχείρησης",
          category: "Σχεδιασμός ιστοσελίδας",
          description:
            "Ξεκάθαρη δομή σελίδας, φυσικό κείμενο και ένα ζεστό οπτικό σύστημα που βοηθά τους επισκέπτες να καταλάβουν γρήγορα την υπηρεσία.",
          image: sharedWorkImages.workspace,
          alt: "Ζεστός μοντέρνος χώρος εργασίας με γραφεία, φυτά και φυσικό φως",
        },
        {
          title: "Πακέτο περιεχομένου ακινήτου",
          category: "Υποστήριξη ακινήτων",
          description:
            "Σύντομο βίντεο, απλό υλικό για δημοσιεύσεις και οπτικό υλικό έτοιμο για ιστοσελίδα για μεσίτες, ομάδες ακινήτων και επιχειρήσεις με έμφαση στον χώρο.",
          image: sharedWorkImages.property,
          alt: "Φωτεινή μεσογειακή βεράντα βίλας με πισίνα και εξωτερικό τοπίο",
        },
      ],
    },
    about: {
      eyebrow: "Σχετικά με την Altus Luna",
      title:
        "Πρακτική δημιουργική υποστήριξη για επιχειρήσεις που χρειάζονται πιο δυνατό οπτικό υλικό χωρίς την υπερβολή ενός μεγάλου γραφείου.",
      paragraphs: [
        "Η Altus Luna έχει στηθεί για πρακτική οπτική δουλειά: την εναέρια λήψη που δείχνει κλίμακα, το μοντάζ που κάνει μια επιχείρηση να φαίνεται ενεργή, την ιστοσελίδα που εξηγεί καθαρά την προσφορά και το περιεχόμενο που κρατά μια επιχείρηση παρούσα διαδικτυακά.",
        "Το ύφος είναι ήρεμο, προσεγμένο και τοπικό, με χώρο για τη ζεστασιά των τόπων, των ανθρώπων, των ακινήτων, των υπηρεσιών και των μικρών επιχειρηματικών ιστοριών της Κύπρου.",
      ],
    },
    cta: {
      eyebrow: "Επικοινωνία",
      title:
        "Έχετε ένα έργο, ακίνητο, υπηρεσία ή επιχείρηση που χρειάζεται να φαίνεται πιο καθαρά διαδικτυακά;",
      tags: [
        "Λήψεις με drone",
        "Επεξεργασία βίντεο",
        "Ιστοσελίδες",
        "Περιεχόμενο για κοινωνικά δίκτυα",
      ],
      description:
        "Μοιραστείτε τι χρειάζεστε να τραβηχτεί, να μονταριστεί, να σχεδιαστεί ή να δημοσιευτεί. Η Altus Luna μπορεί να μετατρέψει τη δουλειά που ήδη κάνετε σε καθαρό οπτικό υλικό και πιο δυνατή παρουσία στο διαδίκτυο.",
      button: "Ξεκινήστε τη φόρμα έργου",
    },
    footer: {
      description:
        "Κινηματογράφηση με drone, επεξεργασία βίντεο, περιεχόμενο για κοινωνικά δίκτυα και ιστοσελίδες για επιχειρήσεις στην Κύπρο, επαγγελματίες ακινήτων και επιχειρήσεις υπηρεσιών που θέλουν να φαίνονται καθαρά, κινηματογραφικά και αξιόπιστα διαδικτυακά.",
    },
    form: {
      eyebrow: "Ξεκινήστε ένα έργο",
      title: "Πείτε μου τι χρειάζεστε και θα επικοινωνήσω σύντομα μαζί σας.",
      description:
        "Αυτή η φόρμα είναι ο πιο γρήγορος τρόπος να μοιραστείτε την επιχείρησή σας, το είδος δουλειάς που χρειάζεστε και πώς προτιμάτε να επικοινωνήσουμε.",
      location:
        "Με βάση την Κύπρο, με δουλειά σε drone, μοντάζ, ιστοσελίδες και περιεχόμενο για κοινωνικά δίκτυα.",
      email: "Ηλεκτρονικό ταχυδρομείο: pawel@altusluna.com",
      phone: "Τηλέφωνο / WhatsApp: +35797492264",
      closeAriaLabel: "Κλείσιμο φόρμας",
      fields: {
        name: "Όνομα",
        business: "Όνομα επιχείρησης",
        email: "Ηλεκτρονικό ταχυδρομείο",
        phone: "Τηλέφωνο ή WhatsApp",
        service: "Υπηρεσία που χρειάζεστε",
        contactMethod: "Προτιμώμενος τρόπος επικοινωνίας",
        message: "Λεπτομέρειες έργου / μήνυμα",
      },
      placeholders: {
        name: "Το όνομά σας",
        business: "Η επιχείρησή σας",
        email: "onoma@example.com",
        phone: "+357...",
        service: "Επιλέξτε υπηρεσία",
        contactMethod: "Επιλέξτε τρόπο επικοινωνίας",
        message:
          "Πείτε μου για το έργο, το χρονοδιάγραμμα και τι είδους βοήθεια χρειάζεστε.",
      },
      serviceOptions: [
        "Drone λήψεις / εναέρια κινηματογράφηση",
        "Επεξεργασία βίντεο",
        "Σχεδιασμός / κατασκευή ιστοσελίδας",
        "Δημιουργία περιεχομένου για κοινωνικά δίκτυα",
        "Δεν είμαι σίγουρος/η ακόμα / χρειάζομαι συμβουλή",
      ],
      contactMethods: ["Ηλεκτρονικό ταχυδρομείο", "Τηλέφωνο", "WhatsApp"],
      submit: "Αποστολή λεπτομερειών έργου",
    },
    thankYou: {
      eyebrow: "Το μήνυμα στάλθηκε",
      title:
        "Ευχαριστώ - το μήνυμά σας έχει σταλεί. Θα επικοινωνήσω σύντομα μαζί σας.",
      description:
        "Αν το έργο είναι επείγον, μπορείτε επίσης να στείλετε ηλεκτρονικό μήνυμα στο pawel@altusluna.com ή να επικοινωνήσετε στο WhatsApp στο +35797492264.",
      button: "Πίσω στην αρχική",
    },
  },
};

export function getProjectHref(language: Language) {
  return language === "gr" ? "/gr/start-project" : "/start-project";
}

export function getHomeHref(language: Language) {
  return language === "gr" ? "/gr" : "/";
}
