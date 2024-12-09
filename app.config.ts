export default defineAppConfig({
  docus: {
    title: "BountyHub Docs",
    description: "Documentation for bounty hub",
    image: "https://docs.bountyhub.org/preview.png",
    socials: {
      github: "bountyhub-org/docs",
    },
    github: {
      dir: "./content",
      branch: "main",
      repo: "docs",
      owner: "bountyhub-org",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      navigation: true,
    },
    footer: {
      credits: false,
      textLinks: [
        {
          text: "BountyHub",
          href: "https://bountyhub.org",
        },
      ],
    },
  },
});
