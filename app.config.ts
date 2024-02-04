export default defineAppConfig({
  docus: {
    title: "BountyHub Docs",
    description: "Documentation for bounty hub",
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
      logo: false,
      title: "BountyHub Docs",
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
