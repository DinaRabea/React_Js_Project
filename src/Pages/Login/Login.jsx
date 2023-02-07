import {useState} from "react"

function Login() {

 // ============================= variable ============================

const [data,setData] = useState({
    email : "",
    password : ""
})

const [error,setError] = useState({
    emailErr : "",
    passwordErr : ""
})

// ============================= function =============================

const changeData = (e) =>{

    if(e.target.name == "email" ){
        if(e.target.value.length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
        setData({
           ...data,
           email : e.target.value 
        })
        setError({
            ...error,
            emailErr : ""
         })
    }else{
          setError({
            ...error,
            emailErr : "email not valid"
         })
    }

    }else{
        if( e.target.value.length > 8 ){
            setData({
               ...data,
               password : e.target.value 
            })
            setError({
                ...error,
                passwordErr : ""
             })
        }else{
              setError({
                ...error,
                passwordErr : "password not valid"
             })
        }
    }

}

// ================================= prvent Default =================================

const submitUserData = (e) => {
    e.preventDefault()
}

// ==================================== return ====================================

    return (
        <div className="w-50 m-auto mt-5 justify-content-center align-items-center text-center" style={{height:"600px"}} >
          <form onSubmit={(e) => submitUserData(e)}>
                <div className="mb-3">
                    <label  className="form-label text-center text-secondary fw-bold">Email address</label>
                    <input name="email"  onChange ={(e) => changeData(e)} type="email" className="form-control"  />
                    <p>{error.emailErr}</p>
                </div>
                <div className="mb-3">
                    <label  className="form-label text-secondary fw-bold">Password</label>
                    <input name="password"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
                    <p >{error.passwordErr}</p>
                </div>
                <button disabled={error.emailErr || error.passwordErr && "disabled"} type="submit" className="btn btn-warning fw-bold text-secondary">Submit</button>
        </form>
        </div>
    )
}

export default Login;