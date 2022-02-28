/**
 * @author 柯伟康
 * @filename useLocalState
 * @date 2021-09-01
 * @description 自定义localState
 */
import React from "react"

export default function useLocalState<S = {}>(initialState: S): [localState: Readonly<S>, localSetState: <K extends keyof S>(localState: Pick<S, K>) => void] {
    const localState = React.useRef<S>(initialState)

    const localSetState: <K extends keyof S>(_localState: Pick<S, K>) => void = _localState => {
        localState.current = Object.assign(localState.current, _localState)
    }

    return [localState.current, localSetState]
}
