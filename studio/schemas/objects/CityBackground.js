export default {
  type: 'object',
  name: 'CityBackground',
  title: 'CityBackground',
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title',
      }
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `City Background`,
        subtitle: 'This is the Gouda map in the top right corner',
      };
    },
  },
};
