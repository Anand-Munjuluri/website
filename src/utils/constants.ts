import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "hello@looskie.com";
const GITHUB = "https://github.com/Anand-Munjuluri";
const TWITTER = "https://twitter.com/devneophyt3";
const LINKEDIN = "https://linkedin.com/in/anandev/";
const INSTAGRAM = "https://instagram.com/anand_munjuluri";



type Work = {
  company: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "FinMuni",
    link: "https://finmuni.com",
    description:
      "Finmuni provides a wide range of financial tools catered to Indian Market.",
  },
  {
    company: "Identity Shield",
    link: "https://github.com/Anand-Munjuluri/IdentityShield",
    description:
      "IdentityShield, a comprehensive identity verification system designed to ensure secure transactions and protect against identity theft.",
  },
];

export {
  EMAIL,
  TWITTER,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  WORK,
  fullTwConfig,
};
