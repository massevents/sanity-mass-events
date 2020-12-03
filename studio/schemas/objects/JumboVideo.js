export default {
  type: 'object',
  name: 'JumboVideo',
  title: 'JumboVideo',
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
      name: 'videoId',
      type: 'string',
      title: 'Video ID - Youtube (11 tekens)'
    },
    {
      name: 'startTime',
      type: 'number',
      title: 'Video later laten beginnen in seconden - Kies niet te veel'
    }

    
  ],
  preview: {
    select: {
      title: 'headingTitle',
      videoId: 'videoId'
    },
    prepare({ title, videoId }) {
      return {
        title: `Video header (should always be the second when used, beneath the Header+nav)`,
        subtitle: `${title} - https://www.youtube.com/watch?v=${videoId}`
      }
    }
  }
}
