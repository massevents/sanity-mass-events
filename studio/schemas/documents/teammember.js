export default {
  name: 'teammember',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Naam'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'name',
      }
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mailadres'
    },
    {
      name: 'roles',
      type: 'string',
      title: 'Rol(len)'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    }
  }
}
