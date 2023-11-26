import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { VideoContent } from "./VideoContent"
import MovieDescription from "./Description"
import MovieCarousel from "../UI/carousel/Carousel"
import { RootState } from "../../store/store"

import "./style.scss"

export const BackgroundScreen: React.FC = () => {
  const currentMovierObj = useSelector((state: RootState) => state.currentMovie.currentMovie)
  const { Id } = currentMovierObj || {}
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    setShowVideo(false)
    if (currentMovierObj) {
      timer = setTimeout(() => {
        setShowVideo(true)
      }, 2000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [Id])

  return (
    <div className="backgroundScreen">
      <VideoContent showVideo={showVideo} />
      {!showVideo && <MovieDescription />}
      <div className="tranding-section">
        <p>Trending Now</p>
        <MovieCarousel />
      </div>
    </div>
  )
}
