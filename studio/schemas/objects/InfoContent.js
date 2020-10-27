export default {
  type: 'object',
  name: 'InfoContent',
  title: 'InfoContent',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },

    {
      name: 'leftContent',
      type: 'portableText',
      title: 'Left Content'
    },

    {
      name: 'rightContent',
      type: 'portableText',
      title: 'Right Content (optional)'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `InfoContent`,
        subtitle: 'Standard 1 or 2 column layout with text'
      }
    }
  }
}
