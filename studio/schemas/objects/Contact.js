export default {
  type: 'object',
  name: 'Contact',
  title: 'Contact',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
        name: 'content',
        type: 'portableText',
        title: 'Address'
    },
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
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Contact section',
      };
    },
  },
};
