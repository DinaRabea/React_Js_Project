import {useState} from "react"

function Regist() {

 // ============================= variable ============================

const [data,setData] = useState({
    Name : "",
    email : "",
    userName : "",
    password : "",
    confirmPassword : ""
})

const [error,setError] = useState({
    NameErr : "",
    emailErr : "",
    userNameErr : "",
    passwordErr : "",
    confirmPasswordErr : ""
})
// ============================= function =============================

const changeData = (e) =>{
        if (e.target.name == "Name"){
            if(e.target.value.length > 0){
                setData({
                    ...data,
                    Name : e.target.value 
                })
                setError({
                    ...error,
                    NameErr : ""
                })
            }else{
                setError({
                    ...error,
                    NameErr : "Name is required"
                })
            }
        }else if(e.target.name == "email"){
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
        }
        else if (e.target.name == "userName"){
            if(e.target.value.length > 0 && !/\s/g.test(e.target.value) ){
                setData({
                    ...data,
                    userName : e.target.value 
                })
            setError({
                    ...error,
                    userNameErr : ""
                })
            }else{
                setError({
                    ...error,
                    userNameErr : "userName Containes Space or empty"
                })
            }
        }
        else if (e.target.name == "password"){
            if( e.target.value.length > 8 && /[^((0-9)|(a-z)|(A-Z)|\s)]/.test(e.target.value))
            {
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
        else if (e.target.name == "ConfirmPassword"){
            if(e.target.value != data.password ){
                setError({
                ...error,
                confirmPasswordErr : "password not match"
                })
            }else{
                setData({
                ...data,
                confirmPassword : e.target.value 
            })
            setError({
                ...error,
                confirmPasswordErr : ""
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
        <div className="w-50 m-auto mt-5 justify-content-center align-items-center text-center" style={{height:"600px"}}>
    <form onSubmit={(e) => submitUserData(e)}>
    <div className="mb-3">
    <label  className="form-label text-center text-secondary fw-bold">Name</label>
    <input name="Name"  onChange ={(e) => changeData(e)} type="text" className="form-control"  />
    <p>{error.NameErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-center text-secondary fw-bold">Email</label>
    <input name="email"  onChange ={(e) => changeData(e)} type="email" className="form-control"  />
    <p>{error.emailErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-center text-secondary fw-bold">User Name</label>
    <input name="userName"  onChange ={(e) => changeData(e)} type="text" className="form-control"  />
    <p>{error.userNameErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-secondary fw-bold">Password</label>
    <input name="password"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
    <p >{error.passwordErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-secondary fw-bold">Confirm Password</label>
    <input name="ConfirmPassword"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
    <p >{error.confirmPasswordErr}</p>
  </div>
  <button disabled={error.NameErr || error.emailErr || error.userNameErr || error.passwordErr || error.confirmPasswordErr && "disabled"} type="submit" className="btn btn-warning fw-bold text-secondary">Submit</button>
</form>
        </div>
    )
}

export default Regist;