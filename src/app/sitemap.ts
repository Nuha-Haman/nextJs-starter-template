import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = process.env.APP_URL;
  return [
    {
      url: APP_URL || "/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          pl: `${APP_URL}/pl`,
        },
      },
    },
  ];
}
