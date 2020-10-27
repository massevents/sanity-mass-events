export default {
  type: 'object',
  name: 'JumboImage',
  title: 'JumboImage',
  fields: [
    {
      name: 'headingTitle',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'headingSubTitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'bgImage',
      type: 'image',
      title: 'Afbeelding'
    }
  ],
  preview: {
    select: {
      title: 'headingTitle',
      image: 'bgImage'
    },
    prepare({ title, image }) {
      return {
        title: `Image header (should always be the second when used, beneath the Header+nav)`,
        media: image
      }
    }
  }
}
