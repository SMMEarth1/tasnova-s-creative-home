/**
 * Everything the site says and shows lives here.
 * Change a name, a line of text or a photo in this file and the whole site updates.
 * Colors and fonts live in src/styles.css.
 */
import portrait from "@/assets/tasnova_portrait.jpg";
import cooking from "@/assets/home_cooking.jpg";
import decor from "@/assets/home_decor.jpg";
import kantha from "@/assets/nakshi_kantha.jpg";
import garden from "@/assets/rooftop_garden.jpg";

export const site = {
  name: "Tasnova Islam",
  role: "Housewife",
  location: "Dhaka, Bangladesh",
  greeting: "আসসালামু আলাইকুম — welcome to my home",
  tagline: "Making a house feel like home — one meal, one stitch, one seedling at a time.",
  portrait,
  meta: {
    title: "Tasnova Islam — Home cook, crafter & rooftop gardener",
    description:
      "The portfolio of Tasnova Islam, a Dhaka housewife sharing her home cooking, home decor, nakshi kantha stitching and rooftop garden.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "My work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Kind words", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    title: "A home is the work of many small, loving hands — mostly mine.",
    paragraphs: [
      "I'm Tasnova, and running our home is the work I'm proudest of. Every day is a mix of cooking for my family, keeping our rooms calm and beautiful, stitching by the window in the afternoon, and tending the little green world on our rooftop.",
      "I learned most of it from my mother and grandmother, and the rest from trying, failing and trying again. This page is where I share what I make — so friends, neighbours and anyone curious can see it, ask questions or simply say hello.",
    ],
    stats: [
      { value: "12+", label: "years running a home" },
      { value: "150+", label: "family recipes" },
      { value: "30+", label: "kanthas stitched" },
      { value: "50", label: "pots on the rooftop" },
    ],
  },

  works: [
    {
      title: "Home cooking",
      kicker: "রান্নাঘর",
      image: cooking,
      description:
        "Everyday Bengali meals — rice, dal, bhorta and fish curry — plus pithas for winter, pickles for summer and big pots of biryani for Eid.",
      tags: ["Bengali home food", "Pitha", "Achar"],
    },
    {
      title: "Home decor",
      kicker: "ঘর সাজানো",
      image: decor,
      description:
        "Cane, jute, terracotta and plenty of plants. I love making rooms feel calm and warm on a small budget, using handmade and local pieces.",
      tags: ["Cane & jute", "Plants indoors", "Low budget"],
    },
    {
      title: "Nakshi kantha",
      kicker: "হাতের কাজ",
      image: kantha,
      description:
        "Hand-stitched kanthas with flowers, birds and village scenes — running stitch by running stitch, the way my grandmother taught me.",
      tags: ["Nakshi kantha", "Embroidery", "Gifts"],
    },
    {
      title: "Rooftop garden",
      kicker: "ছাদবাগান",
      image: garden,
      description:
        "Tomatoes, chillies, eggplants, herbs and marigolds grown in pots and grow bags, with homemade compost from our kitchen scraps.",
      tags: ["Organic vegetables", "Compost", "Flowers"],
    },
  ],

  skills: [
    {
      title: "In the kitchen",
      icon: "cooking",
      items: [
        "Bengali home cooking",
        "Winter pithas",
        "Pickles & preserves",
        "Weekly meal planning",
      ],
    },
    {
      title: "Around the home",
      icon: "home",
      items: [
        "Decorating on a budget",
        "Organising small spaces",
        "Household budgeting",
        "Hosting guests",
      ],
    },
    {
      title: "With needle & thread",
      icon: "craft",
      items: ["Nakshi kantha", "Hand embroidery", "Block printing", "Mending & tailoring"],
    },
    {
      title: "On the rooftop",
      icon: "garden",
      items: ["Organic vegetables", "Composting", "Herbs & flowers", "Seed saving"],
    },
  ],

  testimonials: [
    {
      quote:
        "Whenever Tasnova apa sends over a plate of pitha, the whole building knows it's winter. Nobody makes chitoi pitha like her.",
      name: "Shirin Ahmed",
      relation: "Neighbour",
    },
    {
      quote:
        "The kantha she stitched for my daughter's wedding is the most precious gift we received. Every bird on it has a story.",
      name: "Nadia Rahman",
      relation: "Family friend",
    },
    {
      quote:
        "She helped me start my own balcony garden from scratch. My first tomatoes were thanks to her patience and her compost!",
      name: "Mitu Chowdhury",
      relation: "Gardening group member",
    },
  ],

  contact: {
    title: "Say hello",
    intro:
      "Want a recipe, a kantha for someone special, or tips for your own rooftop garden? Send me a message — I read every one.",
    email: "hello@tasnovaislam.com",
    phone: "+880 1XXX-XXXXXX",
  },

  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],

  footerNote: "Made with love, tea and a little bit of thread.",
};

export type Site = typeof site;
