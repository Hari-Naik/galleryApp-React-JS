// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {resources, updateState, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = resources

  const onThumbnailClick = () => {
    updateState(id)
  }

  const res = isActive ? '' : 'thumbnail-img'

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onThumbnailClick}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={res} />
      </button>
    </li>
  )
}

export default ThumbnailItem
