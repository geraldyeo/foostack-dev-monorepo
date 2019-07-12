import { useStaticQuery, graphql } from 'gatsby';

function useSiteTitle() {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return data?.site?.siteMetadata?.title;
}

export default useSiteTitle;
