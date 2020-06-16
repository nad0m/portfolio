import { analytics } from '../firebase'

export default (content_type, content_id) => {
  analytics.logEvent('select_content', { content_type, content_id })
}
