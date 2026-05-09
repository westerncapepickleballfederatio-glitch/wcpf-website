export interface Tournament {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  description: string;
  categories: string[];
  registrationUrl?: string;
  status: "upcoming" | "ongoing" | "completed";
}

export interface Club {
  id: string;
  name: string;
  location: string;
  description: string;
  contactEmail?: string;
  website?: string;
  instagram?: string;
  established?: string;
  members?: number;
  bg: string;
  initials: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  initials: string;
  bg: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "announcement" | "tournament" | "community" | "media";
  excerpt: string;
  slug: string;
  readTime: string;
}

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "WCPF Winter Open 2025",
    date: "2025-07-19",
    venue: "Bellville Recreation Centre",
    location: "Bellville, Cape Town",
    description: "The premier mid-year tournament for the Western Cape. Open to all skill levels with categories from Beginners through to Pro.",
    categories: ["Beginners", "Intermediate", "Advanced", "Pro"],
    registrationUrl: "https://raqt.com/en/tour/46",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Cape Town Summer Classic",
    date: "2025-11-08",
    venue: "Rondebosch Sports Complex",
    location: "Rondebosch, Cape Town",
    description: "The biggest pickleball event of the year attracting players from across the Western Cape and beyond.",
    categories: ["Mixed Doubles", "Men's Doubles", "Women's Doubles", "Singles"],
    registrationUrl: "https://raqt.com/en/tour/46",
    status: "upcoming",
  },
  {
    id: "3",
    title: "South Peninsula Club Championships",
    date: "2025-09-13",
    venue: "Fish Hoek Sports Ground",
    location: "Fish Hoek, Cape Town",
    description: "Intra-club and inter-club competition for affiliated WCPF clubs. A fantastic day of competitive but friendly play.",
    categories: ["Club Teams", "Mixed Doubles"],
    status: "upcoming",
  },
  {
    id: "4",
    title: "Winelands Invitational",
    date: "2025-10-04",
    venue: "Stellenbosch Tennis Club",
    location: "Stellenbosch",
    description: "A scenic tournament in the heart of the Cape Winelands. Limited spaces — early registration recommended.",
    categories: ["Intermediate", "Advanced"],
    registrationUrl: "https://raqt.com/en/tour/46",
    status: "upcoming",
  },
];

export const clubs: Club[] = [
  { id: "1", name: "Cape Town Picklers", location: "Gardens, Cape Town", description: "One of the founding clubs of the WCPF. We welcome players of all ages and skill levels for weekly social and competitive sessions.", contactEmail: "info@ctpicklers.co.za", website: "https://ctpicklers.co.za", instagram: "ctpicklers", established: "2021", members: 120, bg: "#0A1F5C", initials: "CTP" },
  { id: "2", name: "Bellville Smashers", location: "Bellville, Cape Town", description: "Northern suburbs' most active pickleball club. Multiple court venues and a vibrant community of players from beginners to competitive.", instagram: "bellvillesmashers", established: "2022", members: 85, bg: "#CC1B1B", initials: "BS" },
  { id: "3", name: "Peninsula Pickleballers", location: "Fish Hoek, Cape Town", description: "Representing the beautiful South Peninsula. Our club meets three times a week with ocean views and competitive play.", instagram: "peninsulapickle", established: "2022", members: 65, bg: "#1A3A8F", initials: "PP" },
  { id: "4", name: "Stellenbosch Pickleballers", location: "Stellenbosch", description: "The Winelands' premier pickleball community. A mix of students, professionals and retirees who love the game.", contactEmail: "play@stellenpickle.co.za", instagram: "stellenpickle", established: "2023", members: 55, bg: "#7C3AED", initials: "SP" },
  { id: "5", name: "Atlantic Picklers", location: "Bloubergstrand, Cape Town", description: "Beachside pickleballers with stunning views of Table Mountain. Casual and competitive sessions throughout the week.", instagram: "atlanticpicklers", established: "2023", members: 48, bg: "#0891B2", initials: "AP" },
  { id: "6", name: "Tygerberg Tigers", location: "Tygerberg, Cape Town", description: "Fast-growing club in the Tygerberg area. Known for our energetic coaching programme and junior development focus.", contactEmail: "tigers@tygerberg.co.za", established: "2024", members: 40, bg: "#D97706", initials: "TT" },
];

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Brendan Hartley", role: "Chairperson", bio: "Brendan has been instrumental in growing pickleball across the Western Cape since 2020. A passionate advocate for accessible sport, he leads the federation with vision and community focus.", email: "chair@wcpf.co.za", initials: "BH", bg: "#0A1F5C" },
  { id: "2", name: "Samantha Grobler", role: "Vice-Chairperson", bio: "Samantha brings extensive sports administration experience to the federation. She oversees club relations and membership development across the Western Cape.", email: "vice@wcpf.co.za", initials: "SG", bg: "#CC1B1B" },
  { id: "3", name: "Deon van der Berg", role: "Tournament Director", bio: "Deon coordinates all WCPF sanctioned events and works closely with clubs to deliver world-class tournament experiences for players at every level.", email: "tournaments@wcpf.co.za", initials: "DvdB", bg: "#1A3A8F" },
  { id: "4", name: "Yusuf Adams", role: "Secretary", bio: "Yusuf manages federation administration, governance, and communications. His attention to detail keeps the WCPF running efficiently and transparently.", email: "secretary@wcpf.co.za", initials: "YA", bg: "#2952CC" },
  { id: "5", name: "Liezel Fourie", role: "Treasurer", bio: "Liezel oversees federation finances, funding applications, and sponsorship relations — ensuring WCPF remains financially sustainable for the long term.", email: "finance@wcpf.co.za", initials: "LF", bg: "#7C3AED" },
  { id: "6", name: "Tariq Osman", role: "Coaching & Development", bio: "Tariq leads coach education and player development programmes. He is passionate about introducing pickleball to under-served communities across the Western Cape.", email: "development@wcpf.co.za", initials: "TO", bg: "#0891B2" },
];

export const newsItems: NewsItem[] = [
  { id: "1", title: "WCPF Officially Affiliated with Pickleball South Africa", date: "2025-05-02", category: "announcement", excerpt: "The Western Cape Pickleball Federation has achieved full affiliation with Pickleball South Africa, marking a milestone for the sport in our province.", slug: "wcpf-affiliated-pickleball-sa", readTime: "3 min read" },
  { id: "2", title: "Winter Open 2025 — Registration Now Open", date: "2025-04-28", category: "tournament", excerpt: "Spots are filling fast for the WCPF Winter Open on 19 July at Bellville Recreation Centre. Register now to secure your place.", slug: "winter-open-2025-registration", readTime: "2 min read" },
  { id: "3", title: "New Club Spotlight: Atlantic Picklers of Blouberg", date: "2025-04-15", category: "community", excerpt: "We welcome Atlantic Picklers to the WCPF family. Based in Bloubergstrand, they bring pickleball to the Atlantic Seaboard with stunning views of Table Mountain.", slug: "atlantic-picklers-spotlight", readTime: "4 min read" },
  { id: "4", title: "Coaching Workshop Series Announced for Q3 2025", date: "2025-04-10", category: "announcement", excerpt: "WCPF is proud to launch a series of coach education workshops starting July. Open to all aspiring and existing coaches in the Western Cape.", slug: "coaching-workshop-q3-2025", readTime: "3 min read" },
  { id: "5", title: "Cape Town Summer Classic Venue Confirmed", date: "2025-03-28", category: "tournament", excerpt: "The venue for November's Cape Town Summer Classic has been confirmed as Rondebosch Sports Complex. More details and registration opening soon.", slug: "summer-classic-venue-confirmed", readTime: "2 min read" },
  { id: "6", title: "WCPF Launches Junior Development Programme", date: "2025-03-14", category: "community", excerpt: "A new initiative aimed at introducing pickleball to school-age players across Cape Town — starting with three pilot schools in partnership with local clubs.", slug: "junior-development-launch", readTime: "5 min read" },
];

export const stats = [
  { value: "6+", label: "Affiliated Clubs" },
  { value: "400+", label: "Registered Players" },
  { value: "12", label: "Tournaments Held" },
  { value: "2021", label: "Founded" },
];
