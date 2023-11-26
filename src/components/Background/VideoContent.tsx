import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { IItem } from "../../types"

interface IVideo {
  showVideo: boolean
}

export const VideoContent: React.FC<IVideo> = ({ showVideo }) => {
  const defaultImg = "FeaturedCoverImage.png"
  const currentMovie = useSelector((state: RootState) => state.currentMovie.currentMovie as IItem)

  const { VideoUrl, CoverImage } = currentMovie || {}

  return (
    <>
      {showVideo ? (
        <video id="movie-trailer" src={VideoUrl} autoPlay loop playsInline muted width="100%" height="100%" />
      ) : (
        <img src={`/assets/${CoverImage ? CoverImage : defaultImg}`} width="100%" height="100%" />
      )}
    </>
  )
}
