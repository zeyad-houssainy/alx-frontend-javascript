getFullResponseFromAPI(success){
    return new Promise((resolve, error){
        if (sucess){
            resolve({
                "status": 200,
                "body": "Success"
            });
        } else {
            error("The fake API is not working currently")
        }
    })
}
