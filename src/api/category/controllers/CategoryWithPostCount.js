module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.category.search(ctx.query);
    } else {
      entities = await strapi.services.category.find(ctx.query);
    }

    if (ctx.query.countPosts) {
      // Count the number of posts in each category
      const counts = await Promise.all(entities.map(async (category) => {
        const postCount = await strapi.query('blog', 'blogs').count({ category: category.id });
        return { ...category, postCount };
      }));

      return counts;
    }

    return entities;
  },
};
