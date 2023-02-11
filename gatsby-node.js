exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/presentation',
    toPath:
      'https://docs.google.com/presentation/d/1kOVK3x1j8AgHMl0xf66MjcZA9xPaRj6zAu2j0cXpF20/edit?usp=sharing',
  });
};
