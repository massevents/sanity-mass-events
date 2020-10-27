import * as React from 'react'
import YouTube, { Options } from 'react-youtube'

// Components
import { MaskDefault } from '../../../shared/Masks'
import { Title } from '../../../shared/Title/Component'

// Enums
import * as TitleEnum from '../../../shared/Title/Enums'
import * as HeadingEnum from '../../../shared/Heading/Enums'

// Interfaces
import { IProps } from './Interfaces'

// Styled
import * as Styled from './Style' 

const JumboVideo = ({
  videoId,
  className,
  headingTitle,
  headingSubTitle,
  mediaQueries,
}:IProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const opts:Options =  {
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      playlist: videoId,
      showinfo: 0,
    },
    width: '100%',
  }

  const showVideo = () => {
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }

  const panels = []
  const iterations = mediaQueries.isTabletPortrait ? 10 : 1
  for (let i = 0; i < iterations; i++) {
    panels.push(<div key={`orange-panel-${i}`} />)
  }

  return (
    <section className={className}>
      <Styled.VideoContainer>
        <Styled.Video>
          <YouTube videoId={videoId} opts={opts} onStateChange={showVideo} />
          <Styled.Overlay />
          <Styled.OverlayLoading className={isLoaded ? `isLoaded` : ``}>
            {panels}
          </Styled.OverlayLoading>
          {mediaQueries.isTabletPortrait && (
            <Styled.Section>
              <Title
                size={TitleEnum.Size.big}
                color={HeadingEnum.Color.light}
                heading={headingTitle || "Fill in a header"}
                subheading={headingSubTitle || "Fill in a subtitle"}
              />
            </Styled.Section>
          )}
        </Styled.Video>
        {mediaQueries.isTabletPortrait && <MaskDefault />}
      </Styled.VideoContainer>
      {!mediaQueries.isTabletPortrait && (
        <Styled.SectionRelative>
          <Title
            size={TitleEnum.Size.big}
            color={HeadingEnum.Color.dark}
            heading={headingTitle || "Fill in a header"}
            subheading={headingSubTitle || "Fill in a subtitle"}
          />
        </Styled.SectionRelative>
      )}
    </section>
  )
}

export default JumboVideo;
