export const projectOrder = [
  "saigonzine",
  "fair",
  "rispa",
  "top100",
  "consumerism",
  "beyond",
  "okcomputer",
  "enne",
  "bombee",
  "loveme",
];

export const projects = {
  saigonzine: {
    path: "/saigonzine",
    title: "The Un-Michelin Guide to Saigon food destinations",
    teaser: "A zine about HCMC best hidden street foods, 2023",
    description: [
      "A zine catering to foreign visitors, exploring Saigon's culinary delights through the discerning eyes of locals. Think of it as a more authentic, localized version of the Michelin Guide, sparking diverse opinions and conversations.",
      "I envision a modern layout using contemporary fonts, yet drawing inspiration from the color schemes and typography reminiscent of Vietnamese book covers from the 2000s. This fusion of modernity and nostalgia will create a visually captivating experience, capturing the essence of Saigon's rich culinary landscape.",
      "My zine serves as a cultural bridge, guiding international travelers to hidden gems and beloved eateries cherished by the locals. Through vibrant visuals and engaging narratives, it invites readers into the heart of Saigon's gastronomic journey.",
    ],
    media: [
      "/covermockup.png",
      "/3.jpeg",
      "/4.jpeg",
      "/2.jpeg",
      "/7.jpeg",
      "/8.jpeg",
      "/9.jpeg",
      "/A4 Magazine Mockup.jpeg",
      "/11.jpeg",
      "/12.jpg",
      "/13.jpeg",
      "/14.jpg",
    ],
  },
  fair: {
    path: "/fair",
    title: "Vietnam Typical Good Fair 2023 Poster",
    teaser: "Poster series for Vietnam Typical Goods Fair, 2023",
    description: [
      "A series of posters designed for the Vietnam Typical Goods Fair, hosted at the Saigon Exhibition and Convention Center in August 2023.",
      "Each poster is crafted to capture the energy of the event while showcasing the very best of Vietnam's unique products.",
    ],
    media: ["/fair.png", "/Frame 13.png", "/12215.jpg", "/02-poster-and-billboard-mockups.jpg"],
  },
  rispa: {
    path: "/rispa",
    title: "Ri Beauty Spa",
    teaser: "Branding design for a spa in Tokyo, 2021",
    description: [
      "Ri Beauty Spa is a Japanese beauty salon in Kawasaki City founded by a Vietnamese immigrant entrepreneur. The brand was created to feel welcoming, practical, and accessible for both Japanese customers and working-class immigrant women.",
      "During the naming stage, I researched competitors and noticed many salons relied on foreign words that were difficult to pronounce. I recommended a name that is easy to read, remember, and share through word of mouth.",
      "That strategy shaped a clearer identity with stronger everyday usability while keeping the salon warm and distinctive.",
    ],
    media: [
      "/RiSpa.png",
      "/Ri_beauty-01.png",
      "/Ri_beauty-03.png",
      "/4.png",
      "/poster_.jpg",
      "/Frame 8.png",
      "/Frame 9.png",
    ],
  },
  top100: {
    path: "/top100",
    title: "Top 100",
    teaser: "Editorial and graphic exploration for Top 100",
    description: [],
    media: [
      "/Screenshot 2023-10-20 at 07.38.04.png",
      "/Screenshot 2023-10-20 at 07.38.48.png",
      "/Screenshot 2023-10-20 at 07.41.45.png",
    ],
  },
  consumerism: {
    path: "/consumerism",
    title: "Solitanianian-ism",
    teaser: "A conceptual project about consumerism, 2020",
    description: [
      "Solitarianianism critiques overconsumption and the emptiness of materialism through a fictional ideology. In this world, the price of each item increases based on the quantity purchased, pushing people to reconsider excess.",
      "The manifesto uses humor and absurdity to open a more serious reflection on mindful consumption. Its tall booklet format and restrained palette were chosen to feel calm, intentional, and easy to carry.",
      "The project turns an imaginary system into a visual argument about value, desire, and the habits that shape everyday consumption.",
    ],
    media: [
      "/Frame 22.png",
      "/Frame 17.png",
      "/Frame 18.png",
      "/Frame 19.png",
      "/Frame 20.png",
      "/Frame 25.png",
      "/Frame 26.png",
      "/Frame 27.png",
      "/Frame 28.png",
      "/Frame 29.png",
    ],
  },
  beyond: {
    path: "/beyond",
    title: "Beyond The Frame",
    teaser: "Motion project for a gallery podcast, 2021",
    description: [
      "Beyond the Frame is a visual identity for a podcast program from Propeller Gallery, created in collaboration with artist Doris Purchase.",
    ],
    media: ["/Frame 15.png", "/Frame 31.png"],
  },
  okcomputer: {
    path: "/okcomputer",
    title: "OK Computer",
    teaser: "Redesign of Radiohead's album OK Computer, 2019",
    description: [],
    media: [
      "/_3157633_PROJECT_2_Page_2.png",
      "/_3157633_PROJECT_2_Page_3.png",
      "/_3157633_PROJECT_2_Page_4.png",
      "/_3157633_PROJECT_2_Page_5.png",
      "/_3157633_PROJECT_2_Page_6.png",
      "/_3157633_PROJECT_2_Page_7.png",
    ],
  },
  enne: {
    path: "/enne",
    title: "Enne Homestay",
    teaser: "Brand identity for a guest house in Da Lat",
    description: [
      "\"en.ne\" captures the identity of a guest house in Da Lat, Vietnam, inspired by the Japanese concept of Ma and the beauty of negative space.",
      "The name plays with dual meaning in Vietnamese and English, while the logo uses accents shaped like a branch to echo the surrounding forests and hilltop setting.",
      "The project blends simplicity, language, and nature into a calm identity designed for a memorable and serene guest experience.",
    ],
    media: [
      "/176275299_171977854781631_8918987905806575029_n.jpg",
      "/enne_presentation-02.png",
      "/enne_presentation-03.png",
      "/enne_presentation-04.png",
      "/Frame 11.png",
      "/plate_2.jpg",
      "/Frame 12.png",
    ],
  },
  bombee: {
    path: "/bombee",
    title: "Bombee Honey",
    teaser: "Identity design for an upcoming honey brand in Japan",
    description: [
      "Identity design for an upcoming honey brand in Japan.",
    ],
    media: [
      "/bombee.png",
      "/bombeez_presentation-02.png",
      "/bombeez_presentation-04.png",
      "/bombeez_presentation-06.png",
      "/cup.png",
      "/bombeez_presentation-05.png",
    ],
  },
  loveme: {
    path: "/loveme",
    title: "Love Me",
    teaser: "Poster design project",
    description: [],
    media: ["/loveme.png"],
  },
};

export function getProjectByKey(key) {
  return projects[key];
}

export function getAdjacentProjects(key) {
  const index = projectOrder.indexOf(key);

  if (index === -1) {
    return { previousProject: null, nextProject: null };
  }

  const previousKey = projectOrder[(index - 1 + projectOrder.length) % projectOrder.length];
  const nextKey = projectOrder[(index + 1) % projectOrder.length];

  return {
    previousProject: projects[previousKey],
    nextProject: projects[nextKey],
  };
}
