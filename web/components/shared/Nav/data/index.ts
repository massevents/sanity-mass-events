export const links = [
    { href: '/', label: 'Home', key: '' },
    { href: '/projecten', label: 'Projecten', key: '' },
    { href: '/over-mass-events', label: 'Over MASS Events', key: '' },
    { href: '/contact', label: 'Contact', key: '' },
  ].map((link, index) => {
    link.key = `nav-link-${index}`
    return link
  })