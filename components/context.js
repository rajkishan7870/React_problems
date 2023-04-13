import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import styles from './context.module.css'

const ListContext = React.createContext();



export default function Context() {

    const [list, setList] = useState([])
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setList(res.data))
    }, [])

    const handleDetails = (index) => {
        setDetails({ indexDetails: list[index].body })

    }

    const value = {
        list,
        handleDetails,
    }


    return (

        <ListContext.Provider value={value}>

            <div className={styles.screenCont}>
                <div className = {styles.list}>
                    <List />
                </div>
                <div className = {styles.Details}>
                    <h1 className = {styles.heading}>Details !!!!</h1>
                     {details.indexDetails} 
                </div>
            </div>

        </ListContext.Provider>


    )
}

function List() {
    const { list } = useContext(ListContext);

    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th>S_No.</th>
                        <th>List Item</th>
                        <th>go to List Details</th>
                    </tr>
                </thead>
                <tbody>
                
                {list.map((user, index) => {
                    return (
                        <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.title}</td>
                           <td><GoToDetails index={index} /></td>
                        </tr>
                    )
                })}
            
                </tbody>
            </table>
        </div>
    )
}



function GoToDetails({ index }) {
    const { handleDetails } = useContext(ListContext);

    return (
        <span className = {styles.bttn} onClick={() => handleDetails(index)}>➡️</span>
    )
}