class AuthenticationService{
    registerSuccessfulLogin(username,id,email,password){
        sessionStorage.setItem('authenticatedUser', username)
        sessionStorage.setItem('authenticatedId',id)
        sessionStorage.setItem('authenticatedEmail',email)
        sessionStorage.setItem('authenticatedPassword',password)
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('authenticatedId')
        sessionStorage.removeItem('authenticatedEmail')
        sessionStorage.removeItem('authenticatedPassword')
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return false;
        }
        
        else{
            return true;
        } 
        
    }
}
export default new AuthenticationService()