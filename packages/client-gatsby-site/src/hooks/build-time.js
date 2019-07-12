import { useStaticQuery, graphql } from 'gatsby';

function useBuildTime() {
  const data = useStaticQuery(graphql`
    query BuildTime {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `);
  return data?.site?.buildTime;
}

export default useBuildTime;
