const apiRequest = async (url = '',optionObj = null, errMsg = null)=>{
    try{
        const response = await fetch(url, optionObj)
        if(!response.ok)throw Error("Plesae relode the app")
    }
    catch(err){
        errMsg = err.Message
    }
    finally{
        return errMsg
    }

}

export default apiRequest