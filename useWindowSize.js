import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })
    const changeWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', changeWindowSize)

        return () => {
            window.removeEventListener('resize', changeWindowSize)
        }
    }, [])

    return windowSize
}
export default useWindowSize