import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://present-raven-48306.upstash.io",
  token: process.env.UPSTASH_TOKEN!,
});
