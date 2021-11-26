exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: 'A custom page!',
      meta: {
        description: 'My text description on the custom page',
      },
    },
  });
};
