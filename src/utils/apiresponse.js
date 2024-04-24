class ApiResponse {
    constructor(statusCode, data, message ="Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
        // success will be true if StatusCode < 400 
    }

}

export {ApiResponse}


// class ApiResponse {
//     constructor(statusCode, data, message = "success"){
//         this.statusCode = statusCode
//         this.data = data
//         this.message = message
//         this.success = statusCode < 400
//     }
// }


// class ApiResponse {
//     constructor(statusCode, data, message = "success")
//     {
//         this.statusCode = statusCode
//         this.data = data
//         this.message = message
//         this.success = statusCode < 4000
//     }

// }

// export {ApiResponse}