import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState("Calculating window size...")
  const windowRef = useRef(null)
  const onWindowResize = (e) => {
    setWindowSize(`${windowRef?.current?.clientWidth}w x ${windowRef?.current?.clientHeight}h`)
  }
  window.addEventListener('resize', onWindowResize);
  useEffect(() => {
    onWindowResize()
  }, [])

  return { windowRef, windowSize }
}

export default useWindowSize