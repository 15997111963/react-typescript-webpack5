/**
 * @author K
 * @filename UserStore
 */

import { observable, action } from 'mobx'

export declare interface User {

}

class UserStore {
    @observable
    login = !!localStorage.getItem("token")

    @action
    setLogin = (login: boolean) => {
        this.login = login
    }

    @action
    SignOut = () => {
        this.login = false
        localStorage.setItem("token", "")
        return Promise.resolve()
    }
}

export default new UserStore()