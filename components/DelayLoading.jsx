import { useEffect, useState } from "react"

const DelayLoading = (props) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setTimeout(() => setReady(true), props.delay)
    }, [])
    return ready && props.children
}

DelayLoading.defaultProps = {
    delay: 500
}

export default DelayLoading