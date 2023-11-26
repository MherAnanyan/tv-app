import { useSelector } from "react-redux"
import { IItem } from "../../types"
import { RootState } from "../../store/store"

const MovieDescription: React.FC = () => {
  const currentMovie = useSelector((state: RootState) => state.currentMovie.currentMovie as IItem)
  const { Duration, Category, ReleaseYear, MpaRating, Description, TitleImage } = currentMovie || {}
  const hours = Math.floor(+Duration / 3600)
  const minutes = Math.floor((+Duration % 3600) / 60)

  return (
    <div className="movie-description">
      <div className="category">{Category}</div>
      <div className="image-title">
        <img src={`/assets/${TitleImage}`} alt="Movie title" width="100%" height="100%" />
      </div>

      <div className="additional-info">
        <span className="year">{ReleaseYear}</span>
        <span className="rating">{MpaRating}</span>
        <span className="duration">{`${hours}h ${minutes}m`}</span>
      </div>

      <div className="description">
        {Description ||
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"}
      </div>

      <div className="actions">
        <button type="submit" className="play-btn">
          <img src="/assets/icons/paly_icon.svg" width="24px" height="24px" />
          <span>Play</span>
        </button>

        <button type="submit" className="more-btn">
          More Info
        </button>
      </div>
    </div>
  )
}

export default MovieDescription
