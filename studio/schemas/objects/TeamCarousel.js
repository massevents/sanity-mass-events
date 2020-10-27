export default {
  type: 'object',
  name: 'TeamCarousel',
  title: 'TeamCarousel',
  fields: [
    { 
      name: 'people',
      title: 'Wie zijn we?',
      type: 'array',
      
      of: [{
        type: 'reference',
        to: [{type: 'teammember'}]
      }]
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      people: 'people'
    },
    prepare({ heading, people }) {
      return {
        title: `TeamCarousel`,
        subtitle: `${people.length} people added`
      };
    },
  },
};
