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
  },
  "projects": *[_type == "project"] {
    ...,
    disallowRobot,
    includeInSitemap,
    _createdAt,
    _updatedAt
  },
  "news": *[_type == "news"] {
    ...,
    disallowRobot,
    includeInSitemap,
    _createdAt,
    _updatedAt
  }
}`;

const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route;
  const { _createdAt, _updatedAt } = page;
  const { includeInSitemap, disallowRobots } = route;
  const path = route["slug"]["current"] === "/" ? "/" : `/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobots,
    _createdAt,
    _updatedAt,
    page: "/LandingPage",
  };
  return obj;
};

const reduceProjects = (obj, route) => {
  const { slug = {} } = route;
  const { includeInSitemap, disallowRobots, _createdAt, _updatedAt } = route;
  const path = `/project/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobots,
    _createdAt,
    _updatedAt,
    page: "/project",
  };
  return obj;
};

const reduceNews = (obj, route) => {
  const { slug = {} } = route;
  const { includeInSitemap, disallowRobots, _createdAt, _updatedAt } = route;
  const path = `/news/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobots,
    _createdAt,
    _updatedAt,
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
      const { routes = [],projects =[], news = [] } = res;

      const nextRoutes = {
        ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
        ...projects.filter(({ slug }) => slug.current).reduce(reduceProjects, {}),
        ...news.filter(({ slug }) => slug.current).reduce(reduceNews, {}),
      };

      return nextRoutes;
    });

    console.log(pageRoutes);

    // MAKE SURE ALL FETCHES ARE DONE

    return pageRoutes;
  },
});
