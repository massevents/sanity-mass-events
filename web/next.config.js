const withCSS = require("@zeit/next-css");
const client = require("./client");

const isProduction = process.env.NODE_ENV === "production";
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
    }
  }
}`;
const projectQuery = `
{
  "projects": *[_type == "project"] {
    ...,
    disallowRobot,
    includeInSitemap,
  }
}`;

const newsQuery = `
{
  "news": *[_type == "news"] {
    ...,
    disallowRobot,
    includeInSitemap,
  }
}`;

const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route;
  const { _createdAt, _updatedAt } = page;
  const { includeInSitemap, disallowRobot } = route;
  const path = route["slug"]["current"] === "/" ? "/" : `/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: "/LandingPage",
  };
  return obj;
};

const reduceProjects = (obj, route) => {
  const { slug = {} } = route;
  const { includeInSitemap, disallowRobot } = route;
  const path = `/project/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    page: "/project",
  };
  return obj;
};

const reduceNews = (obj, route) => {
  const { slug = {} } = route;
  const { includeInSitemap, disallowRobot } = route;
  const path = `/news/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    page: "/news",
  };
  return obj;
};

module.exports = withCSS({
  assetPrefix: "/",
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]___[hash:base64:5]",
  },
  exportPathMap: async function () {
    const pageRoutes = client.fetch(query).then((res) => {
      const { routes = [] } = res;

      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
        // '/custom-page': {page: '/CustomPage'}
      };

      const projectRoutes = client.fetch(projectQuery).then((res) => {
        const { projects = [] } = res;

        const nextProjects = {
          // Routes imported from sanity
          ...projects.filter(({ slug }) => slug.current).reduce(reduceProjects, {}),
          // '/custom-page': {page: '/CustomPage'}
        };
        return { ...nextRoutes, ...nextProjects };
      });

      const newsRoutes = client.fetch(newsQuery).then((res) => {
        const { news = [] } = res;

        const nextNews = {
          // Routes imported from sanity
          ...news.filter(({ slug }) => slug.current).reduce(reduceNews, {}),
          // '/custom-page': {page: '/CustomPage'}
        };
        return { ...nextRoutes, ...projectRoutes, ...nextNews };
      });

      return newsRoutes;
    });

    return pageRoutes;
  },
});
