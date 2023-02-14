import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Password() {
    const [pwd,setPwd] = useState("")
    const [err, setError] = useState("")
    let handlePwdChange=(e)=>{
        setPwd(e.target.value)
    }
    let handleSubmit = ()=>{
        if(!pwd==="this"){
            setError("Incorrect Password!")
        }
    }
    return (
        <div className='container-fluid password d-flex align-items-center justify-content-center'>
            <div className='col-11 col-md-5'>
                <h4 className="text-white">PLEASE ENTER THE PASSWORD TO CONTINUE...</h4>
                <p className="lead text-danger fw-bold">{err}</p>
                <form className="row d-flex mt-3">
                    <div className="col-10 me-auto">
                        <div className="bg-light" style={{ height: "75px" }}>
                            <input type="password" className='p-3' style={{height:"100%", width:"100%", border:"none", outline:"none", fontSize:'36px'}} onChange={handlePwdChange} value={pwd} />
                        </div>
                    </div>
                    <Link className='btn col-2 text-white d-flex align-items-center justify-content-center' to={(pwd==='this'?'/welcome':'/')} onClick={handleSubmit} style={{backgroundColor:"#909C76", borderRadius:'0', fontSize:'30px'}}> <iconify-icon icon="material-symbols:arrow-right-alt"></iconify-icon></Link>

                </form>
            </div>
        </div>
    )
}
