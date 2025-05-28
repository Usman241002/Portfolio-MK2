type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ad & Costsheet Generator",
    description:
      "Designed for efficient ad creation and cost sheet generation.",
    image: "Ad&CostsheetGenerator.png",
  },
  {
    id: 2,
    title: "ExTracker",
    description: "User friendly team expense tracker for businesses",
    image: "ExpenseTracker.png",
  },
  {
    id: 3,
    title: "Portfolio MK1",
    description:
      "My first attempt at creating a personal development portfolio",
    image: "Portfoliomk1.png",
  },
];

export default projects;
