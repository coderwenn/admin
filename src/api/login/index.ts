import wenHttp from '../../utis/axios'
import { UserInfo } from '../../types/login'


/**
 * 登录
 * @param arg 登录信息
*/
export const login = (arg: UserInfo) => {
    return wenHttp.post('/api/user/login', arg)
}

/**
 * 获取验证码
*/
export const getCode = () => {
    return wenHttp.get('/api/user/code')
}
