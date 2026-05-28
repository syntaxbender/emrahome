import config from "@/app/configs/seo"

const Seo = ({ title, description, url, openGraph, robots, type, author,authorUrl }={}) => {
  return {
      title: title ? `${title} | ${config.siteName}` : config.siteName,
      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
      },
      // authors: [{ name: author ?? config.defaultAuthor, url: authorUrl ?? config.defaultAuthorUrl }],
      // viewport: config.defaultViewPort,
      alternates: {
        canonical: url ? `${config.siteRootUrl}${url}` : config.siteRootUrl,
      },
      description: description ?? `${config.defaultDescription}`,
      openGraph: {
        title: title ? `${title} | ${config.siteName}` : config.siteName,
        description: description ?? `${config.defaultDescription}`,
        url: url ? `${config.siteRootUrl}${url}` : config.siteRootUrl,
        siteName: config.siteName,
        type: type || `${config.defaultType}`,
        locale: config.locale,
        images: openGraph?.image?.url ? [{
          url: openGraph.image.url || null,
          width: openGraph.image.width || null,
          height: openGraph.image.height || null,
          alt: openGraph.image.alt || null,
        }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: title ? `${title} | ${config.siteName}` : config.siteName,
        description: description ?? `${config.defaultDescription}`,
        images: openGraph?.image?.url ? [{url:openGraph.image.url}] : [],
      },
      robots: robots ?? `${config.defaultRobots}`,
    }
  
}

export default Seo
