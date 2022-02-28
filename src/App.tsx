/**
 * @author 柯某
 * @description App
 */
import React from "react"
import RouterConfig from "@/router/Router"

import { ConfigProvider } from "antd"

const App: React.FC = () => {
    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}>
            <RouterConfig></RouterConfig>
        </ConfigProvider>
    )
}

export default App
