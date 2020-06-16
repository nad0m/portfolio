import firebase from './firebase'
import logVisitor from '../utils/logVisitor'

export const signInAnonymously = () => {
  firebase.auth().signInAnonymously().catch(function(error) {
    const errorCode = error.code
    const errorMessage = error.message

    if (errorCode) {
      console.log(errorMessage)
    }
  })
}

firebase.auth().onAuthStateChanged((user) => {
  user && logVisitor()
})

export default firebase.auth()