import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://euroquantum-au.com";
  const pages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/get-started",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
