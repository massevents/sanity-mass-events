// Base
import React from 'react'
import Link from 'next/link'
import client from "../../../client";

// Components
import { Heading } from '../../shared/Heading/Component'

// Enums
import * as HeadingEnum from '../../shared/Heading/Enums'

// Interfaces
import { IProps, Member } from './Interfaces'

// Style
import * as Styled from './Style'

export const BusinessCard = (props: IProps) => {
    
  const [member, setMember] = React.useState<Member>({ name: 'Loading', roles: 'Loading'});

  React.useEffect(() => {
    if (member.name === 'Loading') {
      client
      .fetch(`*[_type == "teammember" && _id == "${props._ref}"]{...}`)
      .then((response:any) => {        
        const [dataToSave] = response;
        setMember(dataToSave);
      });
    }
  }, [member]);


  return (
    <Styled.Container>
      <Heading color={HeadingEnum.Color.primary} tag={HeadingEnum.Tag.h5}>
        {member && member.name}
      </Heading>
      <p>{member && member.roles}</p>
      <p>
          <a href={`mailto:${member && member.email}`} title={`Stuur een email naar ${member && member.name}`}>{member && member.email}</a>
      </p>
    </Styled.Container>
  )
}
