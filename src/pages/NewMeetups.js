import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'

function NewMeetupsPage() {
  const history = useHistory()

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-app-7a180-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupsPage
