import React, { useState } from 'react'
import api from "../api"

const Users=()=>{
    

    const [users, setUsers] = useState(api.users.fetchAll())
    const [array, setArray] = useState()

    
    
    
    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id!==id))
        
        

    }
    
    const renderPhrase = (number = users.length) => {
        
        if (number == 0) {
            
            return 'Никто с тобой не тусанёт'
            
        } else if (number == 1) {
            return number + ' человек тусанёт с тобой сегодня'
        } else if (number <= 4) {
            return number + ' человека тусанут с тобой сегодня'
        } else if (number > 4){
            return number + ' человек тусанёт с тобой сегодня'
        } else if (number == 1) {
            return number + ' человек тусанёт с тобой сегодня'
        }

        
    }

    const renderBackgroundStyle = (number = users.length) => {
        if (number >= 1) {
            return 'primary'
        } else {
            return 'danger'
        }
    }
    
    return (
        <>
            <h2><span className={'badge bg-' + renderBackgroundStyle()}>{renderPhrase()}</span></h2>
            
            
            <table className="table" id='mainTable'>
                <thead>
                    <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user=>(
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.qualities.map(quality=>(<span className={"badge m-1 bg-" + quality.color} key={quality._id}>{quality.name}</span>))}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate + "/5"}</td>
                            <td><button key={user._id} className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>Delete</button></td>
                        </tr>))
                    }    
                </tbody>
            </table>
            



        </>
    )
    
    // return <h1>Users</h1>
}

export default Users