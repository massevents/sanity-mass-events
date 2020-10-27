export default {
  type: 'object',
  name: 'About',
  title: 'About',
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
      name: 'left_col_text',
      type: 'portableText',
      title: 'Text in left Column',
    },
    {
      name: 'right_col_text',
      type: 'portableText',
      title: 'Text in right Column',
    },
    {
      name: 'quote',
      type: 'string',
      title: 'Quote',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `About`,
        subtitle: `${heading}`,
      };
    },
  },
};
