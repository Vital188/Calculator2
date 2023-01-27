import { useState, useEffect } from 'react';
import Create from './Components/Create';
import List from './Components/List';
import './App.scss';
import DataContext from '../src/Contexts/DataContext';
import { create, destroy, read } from "./Functions/localStorage";

function Main() {

    const [consumer, setConsumer] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [deleteData, setDeleteData] = useState(null);
    const key = 'consumer';

    useEffect(() => {
        setConsumer(read(key));
      }, [lastUpdate]);
    
 
    useEffect(() => {
        if (null === createData) {
          return;
        }
        create(key, createData);
        setLastUpdate(Date.now())
      }, [createData]);

      useEffect(() => {
        if (null === deleteData) {
          return;
        }
        destroy(key, deleteData.id);
        setLastUpdate(Date.now());
         }, [deleteData]);

    
     return (

        <DataContext.Provider value={{
            setCreateData,
            setDeleteData
        }}>
              <div className="container">
                <div className="d-grid gap-0">
                <div className="p-2 bg-success border text-xl-center" style={{
                    fontSize: '30px',
                    borderRadius: '10px',
                    marginTop: '15px'
                }}><b>Ethereum Staking Profit Calculator</b></div>
                </div>

                <div className="row">
                    <div className="col col-lg-4 col-md-12">
                        <Create />
                    </div>
                    <div className="col col-lg-8 col-md-12">
                    {
                        consumer?.map(consum => <List key={consum.id} consum={consum} />)
                    }
                    </div>
                </div>
            </div>
            </DataContext.Provider>
    )
}
export default Main;