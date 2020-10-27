export default {
  type: 'object',
  name: 'Header',
  title: 'Header+nav',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'What type of header+nav do you want?',
      options: {
        list: [
          'white', 'colors'
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'isAbsolute',
      type: 'boolean',
      title: 'Should this fall over the header image/video?'
    }
  ],
  preview: {
    select: {
      type: 'type',
      isAbsolute: 'isAbsolute'
    },
    prepare({ type, isAbsolute }) {
      return {
        title: `Header + nav (Must be the first thing on a page)`,
        subtitle: `${type === 'colors' ? 'Is a colored menu' : 'Is a white menu' } and ${isAbsolute ? `falls over the header image/video` : `does NOT fall over the header image/video`}`
      }
    }
  }
}
