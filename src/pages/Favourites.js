import { useContext } from 'react'
import FavouritesContext from '../store/favourites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavouritesPage() {
  const FavouritesCtx = useContext(FavouritesContext)

  let content
  if (FavouritesCtx.totalFavourites === 0) {
    content = <p>There are no favourites yet!</p>
  } else {
    content = <MeetupList meetups={FavouritesCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
}

export default FavouritesPage
