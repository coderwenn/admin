import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const wenHttp = axios.create({
    timeout: 10000,
})

// 请求拦截
wenHttp.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // 添加token
        const token = localStorage.getItem('adminToken') ?? ''
        if (token) config.headers.Authorization = token
        return config
    },
    (err: any) => {
        console.warn(err)
        ElMessage.error(err)
    }
)

// 响应拦截
wenHttp.interceptors.response.use(
    (res: AxiosResponse): AxiosResponse => {
        return res.data
    },
    (err: any) => {
        console.warn(err)
        // 添加错误信息提示 以及操作
        ElMessage.error(err)
    }
)

export default wenHttp