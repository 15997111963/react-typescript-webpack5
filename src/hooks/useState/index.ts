/**
 * @author Mr Ke
 * @filename useSetState
 */

import React from "react"

export default function useSetState<S>(initialState: S): [
    state: Readonly<S>,
    selfSetState: <K extends keyof S>(state: ((prev: S) => Pick<S, K>) | Pick<S, K>) => void
] {
    const [state, setState] = React.useState<S>(initialState)

    const selfSetState: <K extends keyof S>(_state: Pick<S, K> | ((prev: S) => Pick<S, K>)) => void = (_state) => {
        typeof _state === 'function' ? setState((prev: S): S => ({ ...prev, ..._state(prev) })) : setState((prev: S): S => ({ ...prev, ..._state }))
    }

    return [state, selfSetState]
}
