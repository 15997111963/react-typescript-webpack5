/**
 * @author K
 * @filename Page
 */

import React from "react"
import "./style.less"

const Page: React.FC = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Page
