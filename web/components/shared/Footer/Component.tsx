// Base
import React from 'react'
import Link from 'next/link'

// Components
import { LogoDefault } from '../LogoDefault'
import { SectionDefault } from '../SectionDefault/Component'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../SocialIcon/Component'
import { TheHeretics } from '../TheHeretics/Component'

// Interfaces

// Enums
import * as ColorEnum from '../LogoDefault/Enums'
import * as SectionEnum from '../SectionDefault/Enums'
import * as IconEnum from '../SocialIcon/Enums'

// Style
import * as Styled from './Style'

export const FooterDefault = () => {

  return (
    <Styled.Container>

      <Styled.SectionTop>
        <SectionDefault>
          <Styled.LinksBar>
            <Link href="/">
              <a title="Bezoek de home-pagina" className="isNotUnderlined">
                <LogoDefault color={ColorEnum.Color.white} />
              </a>
            </Link>
            <ul>
              <li>
                  <a
                  href="https://www.facebook.com/MASSevents.nl/"
                    title="Bezoek de Facebook pagina"
                    className="isNotUnderlined"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon color={IconEnum.Color.light} />
                  </a>
              </li>
              <li>
                  <a
                  href="https://www.instagram.com/massevents.nl/"
                    title="Bezoek Instagram kanaal"
                    className="isNotUnderlined"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon color={IconEnum.Color.light} />
                  </a>
              </li>
              <li>
                  <a
                    title="Bezoek LinkedIn pagina"
                    className="isNotUnderlined"
                    target="_blank"
                    href="https://www.linkedin.com/company/massevents/"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color={IconEnum.Color.light} />
                  </a>
              </li>
              <li>
                <Link href="/projecten">
                  <a title="Bezoek projecten">Projecten</a>
                </Link>
              </li>
            </ul>
          </Styled.LinksBar>
        </SectionDefault>
      </Styled.SectionTop>
      <Styled.SectionMiddle>
        <SectionDefault padding={SectionEnum.Padding.none}>
          <Styled.ActionBar>
            <ul>
              <li>KVK: 72414499</li>
              <li>
                <a title="Stuur een mailtje" href="mailto:info@massevents.nl" target="_blank" rel="noopener noreferrer">
                  Stuur ons een mailtje!
                </a>
              </li>
              <li>
                Of bel ons op <a title="Bel ons op 0182 - 23 93 83" href="tel:0182239383"  target="_blank" rel="noopener noreferrer">
                  0182 - 23 93 83
                </a> 
              </li>
            </ul>
            <Link prefetch={false} href="http://www.robinheij.nl">
              <a
                target="_blank"
                rel="noreferrer"
                className="isNotUnderlined"
                title="Bezoek The Heretics"
              >
                <TheHeretics />
              </a>
            </Link>
          </Styled.ActionBar>
        </SectionDefault>
      </Styled.SectionMiddle>
      <Styled.SectionBottom>
        <SectionDefault padding={SectionEnum.Padding.none}>
          <Styled.ActionBar>
            <ul>
              <li>
                <Link href="/privacy-statement">
                  <a title="Bezoek privacy statement">Privacy Statement</a>
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden">
                  <a title="Bezoek algemene voorwaarden">
                    Algemene voorwaarden
                  </a>
                </Link>
              </li>
            </ul>
          </Styled.ActionBar>
        </SectionDefault>
      </Styled.SectionBottom>
    </Styled.Container>
  )
}
