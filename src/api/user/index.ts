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

/**
 * 修改用户状态
 * @param arg {id:number, status:boolean}
 */
export const setStatus = <T = any>(arg: {id:number, status:boolean}) => {
    return wenHttp.post<T>('/api/user/setStatus',arg)
}
