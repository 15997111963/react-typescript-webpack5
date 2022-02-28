import React from "react"

export default function useRefState<T>(initialState: T | (() => T)) {
    const [state, setState] = React.useState<T>(initialState)
    const ref = React.useRef<T>(state)
    React.useEffect(() => {
        ref.current = state
    }, [state])
    return [state, setState, ref] as const
}