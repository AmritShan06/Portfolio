import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioData.personal.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
