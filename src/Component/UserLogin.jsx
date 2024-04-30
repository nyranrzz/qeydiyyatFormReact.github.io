import React from 'react'
import './UserLogin.css'
let a=""
function myfunc(e){
    a= e.target.value.slice(-3)
}
function btn(){
if(a!==".ru" ){
    alert("Yalniz .ru domenlerine icaze verilir!")
   }}
function UserLogin() {
  return (
    <div>
        <form>
            <h1>Registr</h1>
            <input onKeyUp={myfunc} type='gmail' placeholder='gmail'/>
            <br/>
            <input type='password' placeholder='password' minLength={8}/>
            <br/>
            <button onClick={btn}>Login</button>
        </form>
    </div>
  )
}

export default UserLogin