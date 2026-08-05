import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/portfolio/",
    },
    sitemap: "https://aloktv.dev/portfolio/sitemap.xml",
  }
}
