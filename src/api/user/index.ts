import wenHttp from '~/src/utils/axios'


/**
 * 查询全部用户
 */
export const getAllUser = <T = any>() => {
    return wenHttp.get<T>('/api/user/allUser')
}

/**
 * 删除指定用户
 * @param id 用户id
 */
export const delectUser = <T = any>(id: number) => {
    return wenHttp.delete<T>(`/api/user/${id}`)
}
