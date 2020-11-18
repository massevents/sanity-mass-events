// Base
import React from "react";

// Interfaces
import { IProps } from "./Interfaces";

// Components
import { FacebookIcon, InstagramIcon, LinkedInIcon, SpotifyIcon } from "../SocialIcon/Component";
import { ButtonDefault } from "../../shared/Button/Component";

// Enums
import * as IconEnum from "../SocialIcon/Enums";
import * as ColorEnum from "../../../enums/Color";

// Style
import * as Styled from "./Style";

export const SocialMedia: React.FC<IProps> = ({ urls, ticketUrl, ticketUrlText }) => {
  console.log(urls);
  return (
    <Styled.Container>
      <Styled.Section>
        <ul>
          {ticketUrl && (
            <li>
              <ButtonDefault className="light" href={ticketUrl} color={ColorEnum.Color.primary} title="Koop tickets nu!" target="_blank">
                { ticketUrlText || 'Koop tickets nu' }
              </ButtonDefault>
            </li>
          )}
          {urls.facebook && (
            <li>
              <a href={urls.facebook} title="Bezoek de Facebook pagina">
                <FacebookIcon color={IconEnum.Color.dark} />
              </a>
            </li>
          )}
          {urls.instagram && (
            <li>
              <a title="Bezoek het Instagram kanaal" href={urls.instagram}>
                <InstagramIcon color={IconEnum.Color.dark} />
              </a>
            </li>
          )}{" "}
          {urls.linkedin && (
            <li>
              <a title="Bezoek de LinkedIn pagina" href={urls.linkedin}>
                <LinkedInIcon color={IconEnum.Color.dark} />
              </a>
            </li>
          )}{" "}
          {urls.spotify && (
            <li>
              <a title="Bezoek de Spotify playlist" href={urls.spotify}>
                <SpotifyIcon color={IconEnum.Color.dark} />
              </a>
            </li>
          )}{" "}
          {urls.website && (
            <li>
              <a title="Bezoek de website" href={urls.website}>
                Website
              </a>
            </li>
          )}
        </ul>
      </Styled.Section>
    </Styled.Container>
  );
};
