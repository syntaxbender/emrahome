import Head from 'next/head'
import React from 'react'
import config from "@/app/config/seo"
const Seo = ({ title, description, url, ogData, robots, type, author, authorUrl }) => {
  return (
    <Head>
      <title>
        {
          title ? `${title} | ${config.siteName}` : config.siteName
        }
      </title>
      <meta
        name="description"
        content={
          description ?? `${config.defaultDescription}`
        }
      />
      <meta
        name="author"
        content={
          author ?? `${config.defaultAuthor}`
        }
      />
      <meta
        name="author:url"
        content={
          authorUrl ?? `${config.defaultAuthorUrl}`
        }
      />
      <meta
        property="og:title"
        content={
          title ? `${title} | ${config.siteName}` : config.siteName
        }
      />
      <meta
        property="og:description"
        content={
          description ?? `${config.defaultDescription}`
        }
      />
      <meta
        property="og:url"
        content={
          url ? `${config.siteRootUrl}${url}` : config.siteRootUrl
        }
      />
      <meta
        property="og:site_name"
        content={config.siteName}
      />
      {(ogData && ogData.image && ogData.image.url) &&
        <meta
          property="og:image"
          content={
            ogData.image.url
          }
        />
      }
      {(ogData && ogData.image && ogData.image.width) &&
        <meta
          property="og:image:width"
          content={
            ogData.image.width
          }
        />
      }
      {(ogData && ogData.image && ogData.image.height) &&
        <meta
          property="og:image:height"
          content={
            ogData.image.height
          }
        />
      }
      {(ogData && ogData.image && ogData.image.alt) &&
        <meta
          property="og:image:alt"
          content={
            ogData.image.alt
          }
        />
      }
      <meta
        property="og:type"
        content={
          type || `${config.defaultType}`
        }
      />
      <meta
        property="og:locale"
        content={
          config.locale
        }
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={
          title ? `${title} | ${config.siteName}` : config.siteName
        }
      />
      <meta
        name="twitter:description"
        content={
          description ?? `${config.defaultDescription}`
        }
      />
      {(ogData && ogData.image && ogData.image.url) &&
        <meta
          property="twitter:image"
          content={
            ogData.image.url
          }
        />
      }
      <meta
        name="robots"
        content={
          robots ?? `${config.defaultRobots}`
        }
      />
      <link
        rel="canonical"
        href={
          url ? `${config.siteRootUrl}${url}` : config.siteRootUrl
        }
      />
      {/* <link
        rel="alternate"
        href="https://mywebsite.com"
        hreflang="en-US"
      /> */}
    </Head>
  )
}
export default Seo