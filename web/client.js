const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'n44llqu2',
  dataset: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
