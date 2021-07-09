import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'

function MeetupItem(props) {
  const FavouritesCtx = useContext(FavouritesContext)
  const itemIsFavourite = FavouritesCtx.itemIsFavourite(props.id)

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      FavouritesCtx.removeFavourite(props.id)
    } else {
      FavouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions} onClick={toggleFavouriteStatusHandler}>
          <button>
            {itemIsFavourite ? 'Remove From Favourites' : 'Add To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
