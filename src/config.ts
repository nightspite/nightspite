import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://nightspite.me",
  author: "Kacper Kurteczka",
  desc: "Fullstack developer with a passion for turning ideas into reality through code.",
  title: "Kacper Kurteczka (@nightspite)",
  username: "nightspite",
  ogImage: "nightspite-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,

  github: "nightspite",
  readcv: "nightspite",
  linkedin: "kacperkurteczka",
  twitter: "nightspite3",
  reddit: "nightspite",
  email: "kacper.kurteczka@gmail.com"
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: `https://github.com/${SITE.github}`,
    linkTitle: `${SITE.author} (@${SITE.github}) on Github`,
    active: true,
  },
  {
    name: "read.cv",
    href: `https://read.cv/${SITE.readcv}`,
    linkTitle: `${SITE.author} (@${SITE.readcv}) on read.cv`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/${SITE.linkedin}/`,
    linkTitle: `${SITE.author} (@${SITE.linkedin}) on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: `https://twitter.com/${SITE.twitter}`,
    linkTitle: `${SITE.author} (@${SITE.twitter}) on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: `mailto:${SITE.email}`,
    linkTitle: `Send an email to ${SITE.email}`,
    active: true,
  },
  {
    name: "Reddit",
    href: `https://www.reddit.com/user/${SITE.reddit}`,
    linkTitle: `${SITE.author} (@${SITE.reddit}) on Reddit`,
    active: true,
  },
  // {
  //   name: "Discord",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: true,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Instagram`,
  //   active: true,
  // },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: true,
  // },
  // {
  //   name: "Twitch",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on TikTok`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  
  // {
  //   name: "GitLab",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
