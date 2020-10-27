export default {
  type: 'object',
  name: 'WorkTogether',
  title: 'WorkTogether',
  fields: [
    {
      name: 'label_top_left',
      type: 'string',
      title: 'Label (Top Left)',
    },
    {
      name: 'heading_top_left',
      type: 'string',
      title: 'Heading (Top Left)',
    },
    {
      name: 'content_top_left',
      type: 'portableText',
      title: 'Content (Top Left)',
    },
    {
      name: 'label_top_right',
      type: 'string',
      title: 'Label (Top Right)',
    },
    {
      name: 'heading_top_right',
      type: 'string',
      title: 'Heading (Top Right)',
    },
    {
      name: 'content_top_right',
      type: 'portableText',
      title: 'Content (Top Right)',
    },
    {
      name: 'label_bottom',
      type: 'string',
      title: 'Label (Bottom)',
    },
    {
      name: 'heading_bottom',
      type: 'string',
      title: 'Heading (Bottom)',
    },
    {
      name: 'content_bottom',
      type: 'portableText',
      title: 'Content (Bottom)',
    },
  ],
  preview: {
    select: {
      title: `WorkTogether`,
    },
    prepare( ) {
      return {
        title: `WorkTogether`,
      };
    },
  },
};
