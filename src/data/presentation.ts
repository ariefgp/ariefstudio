type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "gusti@codekarsa.com",
  title: "Hi, I’m Gusti 👋",
  // profile: "/profile.webp",
  description:
    "Hi, I'm an *Indonesian Fullstack Developer* with over *7 years* of development experience. I am currently working with *NextJS, ReactJS, NodeJS, Golang and Python*. ",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/codekarsa",
    },
    {
      label: "Github",
      link: "https://github.com/ariefgp",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ariefgp/",
    },
  ],
};

export default presentation;
