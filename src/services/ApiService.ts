interface RequestOptions{
    url:string,
    dto?:any,
    headers?: HeadersInit
}
interface RequestResponse<T> extends Pick<Response,"status">{
    data:T
}

type RequestMethod = "GET" | "POST" | "UPDATE" | "DELETE"

class ApiService{
    baseUrl: string = "https://trello-server-cec1f6a5a5da.herokuapp.com"

    private _checkNewUrl(url:string){
        if(url.includes("http://") || url.includes("https://")){
            return url
        }
        return this.baseUrl + url
    }

    private async _status(response:Response){
        if(response.ok){
            return response
        }
        return Promise.reject(response)
    }

    private async _serverRequest<T>(
        options: RequestOptions,
        method: RequestMethod
    ):Promise<RequestResponse<T>>{
        const url = this._checkNewUrl(options.url)
        
        return fetch(url, {
            method: method,
            body: JSON.stringify(options.dto),
            headers:{
                "Content-Type": "application/json",
               ...options.headers
            }
        })
        .then(this._status)
        .then(async (response) =>{
            const data = await response.json()

            return {
                status: response.status,
                data
            }
        })
    }

    async get<T extends unknown>(options:RequestOptions){
        return this._serverRequest<T>(options, "GET")
    }
    async post<T extends unknown>(options:RequestOptions){
        return this._serverRequest<T>(options, "POST")
    }

}

export const apiService = new ApiService()