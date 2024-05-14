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
  "Hi, I'm a *Software Engineer* with over *9 years* of development experience. I am currently building *Codekarsa* and playing with *JS-Family, Golang and Python*. Really interested on AI and Machine Learning. If you have an interesting project, please ping me! ",
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
