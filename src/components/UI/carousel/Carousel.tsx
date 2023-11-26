import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { setMovie } from "../../../store/slices/currentMovie"
import { IItem } from "../../../types"

import "./style.scss"

const MovieCarousel: React.FC = () => {
  const dispatch = useDispatch()
  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollThreshold: number = 8
  const currentMovieIdFromSession = sessionStorage.getItem("currentMovieId")
  const trendingNow = useSelector((state: RootState) => state.trendingNow.trending)
  const futureMovie = useSelector((state: RootState) => state.features.featured)
  const currentMovie = useSelector((state: RootState) => state.currentMovie.currentMovie as IItem)
  const [itemsToShow, setItemsToShow] = useState<IItem[]>([])

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current
      console.log(scrollLeft, clientWidth, scrollWidth)
      const isAtEnd = scrollLeft + clientWidth === scrollWidth
      let manualScroll = false
      if (!manualScroll && isAtEnd) {
        const remainingItems = trendingNow.length - itemsToShow.length
        if (remainingItems > 0) {
          const additionalItems = trendingNow.slice(
            itemsToShow.length,
            itemsToShow.length + Math.min(remainingItems, scrollThreshold)
          )
          setItemsToShow(prevItems => [...prevItems, ...additionalItems])
        }
      }
    }
  }

  const setCurrentMovie = (id: string) => {
    const movieToSet = trendingNow.find(item => item.Id === id) || futureMovie
    dispatch(setMovie(movieToSet as IItem))
    sessionStorage.setItem("currentMovieId", id)
  }

  useEffect(() => {
    setItemsToShow(trendingNow.slice(0, scrollThreshold))
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth + 100
    }
  }, [trendingNow])

  useEffect(() => {
    if (currentMovieIdFromSession) {
      const indexToMove = trendingNow?.findIndex((obj: IItem) => obj.Id === currentMovieIdFromSession)
      if (indexToMove !== -1) {
        const objectToMove = trendingNow[indexToMove]
        const newArrayOfTrendings = [...trendingNow]
        newArrayOfTrendings?.splice(indexToMove, 1)
        newArrayOfTrendings?.unshift(objectToMove)
        setItemsToShow([...newArrayOfTrendings.slice(0, scrollThreshold)])
        setCurrentMovie(currentMovieIdFromSession)
      }
    }
  }, [trendingNow])

  return (
    <div className="carousel-container">
      <div className="movie-carousel" ref={carouselRef} onScroll={handleScroll}>
        {itemsToShow.map(({ Id, CoverImage, Title }) => (
          <div
            key={Id}
            className={`movie-item ${currentMovie?.Id === Id && "activeMovie"} `}
            onClick={() => setCurrentMovie(Id)}
          >
            <img src={`/assets/${CoverImage}`} alt={Title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCarousel
