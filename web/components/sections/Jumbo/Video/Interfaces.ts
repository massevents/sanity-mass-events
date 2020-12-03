// Interfaces
import { IMediaQueries } from '../../../../interfaces/IMediaQueries'

export interface IProps {
    videoId: string
    className?: string
    headingTitle?: string
    headingSubTitle?: string
    mediaQueries: IMediaQueries
    isVisible?: boolean
    startTime?: number
}

