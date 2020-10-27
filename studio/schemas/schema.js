// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import project from './documents/project'
import teammember from './documents/teammember'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import Header from './objects/Header'
import JumboVideo from './objects/JumboVideo'
import JumboImage from './objects/JumboImage'
import imageSection from './objects/imageSection'
import textSection from './objects/textSection'
import About from './objects/About'
import ProjectOverview from './objects/ProjectOverview'
import TeamCarousel from './objects/TeamCarousel'
import WorkTogether from './objects/WorkTogether'
import Contact from './objects/Contact'
import CityBackground from './objects/CityBackground'
import InfoContent from './objects/InfoContent'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    About,
    CityBackground,
    Contact,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    Header,
    InfoContent,
    JumboImage,
    JumboVideo,
    link,
    page,
    portableText,
    ProjectOverview,
    project,
    route,
    simplePortableText,
    siteConfig,
    TeamCarousel,
    teammember,
    textSection,
    WorkTogether
  ])
})
