export interface JournalPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  readTime: string;
  publishedAt: string;
  image: string;
  alt: string;
}

export const journalData: JournalPost[] = [
  {
    id: "j01",
    slug: "brutalist-geometry-kyoto-pavilions",
    category: "ARCHITECTURE",
    title: "On the Brutalist Geometry of Kyoto Pavilions",
    excerpt:
      "A study of concrete, light, and the quiet discipline of structural form.",
    body: "Concrete is rarely thought of as a soft material. Yet in the pavilions of Kyoto it is shaped with such patience that light itself becomes the ornament, falling in long, slow lines across bare walls. It is the same discipline we return to in every collection: remove what is unnecessary until only form remains.",
    readTime: "4 MIN READ",
    publishedAt: "2026-03-02",
    image: "/assets/journal/journalImage1.jpg",
    alt: "Spiral concrete staircase inside a brutalist building, lit by tall windows",
  },
  {
    id: "j02",
    slug: "return-to-raw-wool",
    category: "CRAFT",
    title: "Inside the Loom: A Return to Raw Wool",
    excerpt:
      "Tracing a coat's origins back to the workshop where the fabric is born.",
    body: "Every coat begins long before the cutting table, in a workshop where wool is spun and woven on wooden looms. The rhythm is slow and the fabric is honest, with every irregularity part of its character. We visit these workshops each season to remember what a garment is really made of.",
    readTime: "6 MIN READ",
    publishedAt: "2026-02-14",
    image: "/assets/journal/journalImage2.jpg",
    alt: "Close-up of a traditional wooden loom weaving raw wool fabric",
  },
  {
    id: "j03",
    slug: "quiet-rooms-light-and-linen",
    category: "INTERIOR",
    title: "Quiet Rooms: On Light and Linen",
    excerpt:
      "A conversation about restraint, natural materials, and living with less.",
    body: "A quiet room asks very little of the people in it: a window, a surface for the morning light, and a few materials that age well. Linen, wood and plaster do the work that decoration usually does. Living with less is not about absence, it is about giving each object room.",
    readTime: "3 MIN READ",
    publishedAt: "2026-01-28",
    image: "/assets/journal/journalImage3.jpg",
    alt: "Sunlit minimalist living room with a cream linen sofa and large windows",
  },
  {
    id: "j04",
    slug: "behind-the-seams-atelier",
    category: "STUDIO",
    title: "Behind the Seams: A Morning in the Atelier",
    excerpt:
      "Inside the quiet, unhurried process of a garment taking shape by hand.",
    body: "In the atelier, mornings begin with the sound of chalk on cloth. Patterns are marked, pinned and adjusted by hand until a garment hangs exactly as it should. Nothing here is rushed, because a seam that is rushed is a seam that is remembered.",
    readTime: "5 MIN READ",
    publishedAt: "2026-04-10",
    image: "/assets/journal/journalImage4.jpg",
    alt: "A tailor's hands pinning fabric on a dress form inside a sunlit atelier",
  },
  {
    id: "j05",
    slug: "notes-from-the-coast",
    category: "TRAVEL",
    title: "Notes from a Quiet Coastline",
    excerpt:
      "On stillness, muted color, and the places that shape a collection.",
    body: "Some places teach restraint better than any studio. A pale coastline at dusk, water the color of slate, a path that leads nowhere in particular. These are the landscapes that quietly shape our palette each season.",
    readTime: "3 MIN READ",
    publishedAt: "2026-05-01",
    image: "/assets/journal/journalImage5.jpg",
    alt: "A pale cliffside coastline at dusk with calm muted-blue water",
  },
  {
    id: "j06",
    slug: "language-of-natural-dye",
    category: "MATERIAL",
    title: "The Language of Natural Dye",
    excerpt:
      "Inside a dye workshop where pigment, water, and patience become color.",
    body: "Natural dye is less a technique than a conversation between pigment, water and time. Indigo deepens with every dip, and no two batches ever match. That variation is what gives a dyed garment its depth, and why we never try to correct it.",
    readTime: "5 MIN READ",
    publishedAt: "2026-05-20",
    image: "/assets/journal/journalImage6.jpg",
    alt: "Deep blue natural indigo dye vats in a traditional dye workshop",
  },
  {
    id: "j07",
    slug: "dressing-in-neutral",
    category: "STYLE",
    title: "Dressing in Neutral: A Quiet Wardrobe Guide",
    excerpt:
      "A guide to building a wardrobe from a handful of quiet, versatile tones.",
    body: "A neutral wardrobe is not a beige one. It is built on a handful of tones, ivory, camel, charcoal and black, chosen so that everything works with everything. Start with a well-cut coat and a fine knit, then add one piece at a time. The goal is fewer decisions, not fewer options.",
    readTime: "4 MIN READ",
    publishedAt: "2026-06-05",
    image: "/assets/journal/journalImage7.jpg",
    alt: "Neatly folded neutral-toned garments in ivory, camel and charcoal stacked on a wooden shelf",
  },
  {
    id: "j08",
    slug: "caring-for-wool-and-silk",
    category: "CARE",
    title: "How to Care for Wool and Silk",
    excerpt: "Simple habits that keep natural fibres looking new for years.",
    body: "Good wool and silk ask for very little, but they ask for it consistently. Air garments after wearing, wash rarely and by hand, and store them folded rather than hung. A little care each season is what lets a piece last for decades.",
    readTime: "3 MIN READ",
    publishedAt: "2026-06-20",
    image: "/assets/journal/journalImage8.jpg",
    alt: "Hands folding a charcoal wool sweater on a linen table beside a black silk scarf",
  },
];
