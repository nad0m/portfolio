import { writeToFireStore } from '../firebase'

const collectionId = process.env.NODE_ENV === 'production' ? 'visitor' : 'visitor_dev'
const ipify = 'https://api.ipify.org?format=json'
const geoIpLookup = 'https://json.geoiplookup.io/'

const logVisitor = async () => {
  const ipResponse = await fetch(ipify)
  const { ip } = await ipResponse.json()
  const geoResponse = await fetch(`${geoIpLookup}${ip}`)
  const result = await geoResponse.json()
  writeToFireStore(collectionId, `${Date.now()}`, result)
}

export default logVisitor