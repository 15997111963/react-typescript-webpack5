import React from "react"

export default function useReactChildren(children: React.ReactNode, childType?: unknown) {
    const { validChildren, count } = React.useMemo(() => {
        let count = 0
        const validChildren = React.Children.map(children, child => {
            if (!React.isValidElement(child)) return null
            if (childType && child.type !== childType) {
                return null
            }
            count++
            return child
        })
        return {
            validChildren,
            count
        }
    }, [children])

    return { validChildren, count }
}

