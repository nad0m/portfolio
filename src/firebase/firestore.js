import firebase from './firebase'

export const writeToFireStore = (collectionId, documentId, data) => {
  firebase.firestore().collection(`${collectionId}`).doc(`${documentId}`).set(data)
  .then(function () {
    console.log("Write success")
  })
  .catch(function (error) {
    console.log(error)
  });
}