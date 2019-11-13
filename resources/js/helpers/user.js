export let getUser = async(token)=>{
    try{
        let response = await axios.get('/api/auth', {headers: {Authorization: 'Bearer '+token}});
        return await response.data;
    }
    catch(error){
        let err = error.response;
        if(err.status == 400 || err.status == 500){
            toastr['error'](err.data, "Oops Error!"); 
        }
        else{
            console.log(err);
        }
        localStorage.removeItem('token');
        return null;
    }
}