import wenHttp from '~/src/utis/axios'


/**
 * 查询全部用户
 */
export const getAllUser = <T = any>() => {
    return wenHttp.get<T>('/api/user/allUser')
}
