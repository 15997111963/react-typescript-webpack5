/**
 * @author Mr Ke
 * @filename useEffectUpdate
 * @description only update
 */

import React from "react"
import useLocalState from "../useLocalState"

export default function useEffectUpdate(effect: () => void, dep: readonly any[]): void {
    const [localState, setLocalState] = useLocalState({
        update: false
    })

    React.useEffect(() => {
        if (localState.update) effect()
        else setLocalState({ update: true })
    }, dep)
}
