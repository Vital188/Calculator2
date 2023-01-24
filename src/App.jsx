import { useState, useEffect } from 'react';
import Book from './Contexts/Book';
import DataContext from './Contexts/DataContext';
import Create from './Create';
import List from './List';
import axios from 'axios';
// import { authConfig } from './Functions/auth';
import { useContext } from 'react';
import './App.scss';

function Main() {

    // const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [createData, setCreateData] = useState(null);
    const [book, setBook] = useState(null);
    const [category, setCategory] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);
    // const { makeMsg } = useContext(DataContext);

    // READ for list
    // useEffect(() => {
    //     axios.get('http://localhost:3003/server/book', authConfig())
    //         .then(res => {
    //             setBook(res.data);
    //         })
    // }, [lastUpdate]);

    // useEffect(() => {
    //     axios.get('http://localhost:3003/server/category', authConfig())
    //         .then(res => {
    //             setCategory(res.data);
    //         })
    // }, [lastUpdate]);

    // useEffect(() => {
    //     if (null === createData) {
    //         return;
    //     }
    //     axios.post('http://localhost:3003/server/book', createData, authConfig())
    //         .then(res => {
    //             setLastUpdate(Date.now());
    //             makeMsg(res.data.text, res.data.type);
    //         });
    // }, [createData, makeMsg]);

    // useEffect(() => {
    //     if (null === deleteData) {
    //         return;
    //     }
    //     axios.delete('http://localhost:3003/server/book/' + deleteData.id, authConfig())
    //         .then(res => {
    //             setLastUpdate(Date.now());
    //             makeMsg(res.data.text, res.data.type);
    //         });
    // }, [deleteData, makeMsg]);

    // useEffect(() => {
    //     if (null === editData) {
    //         return;
    //     }
    //     axios.put('http://localhost:3003/server/book/' + editData.id, editData, authConfig())
    //         .then(res => {
    //             setLastUpdate(Date.now());
    //             makeMsg(res.data.text, res.data.type);
    //         });
    // }, [editData, makeMsg]);


    return (
        <Book.Provider value={{
            setCreateData,
            book,
            setDeleteData,
            modalData,
            setModalData,
            category
        }}>
            <div className="container">
                <div className="d-grid gap-0">
                <div class="p-2 bg-success border text-xl-center" style={{
                    fontSize: '30px',
                    borderRadius: '10px',
                    marginTop: '15px'
                }}>Ethereum Staking Profit Calculator</div>
                </div>

                <div className="row">
                    <div className="col col-lg-4 col-md-12">
                        <Create />
                    </div>
                    <div className="col col-lg-8 col-md-12">
                        <List />
                    </div>
                </div>
            </div>
            </Book.Provider>
    )
}
export default Main;