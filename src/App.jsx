import { useState, useEffect } from 'react';
import Create from './Create';
import List from './List';
import { read} from './Functions/localStorage';
import './App.scss';
import DataContext from '../src/Contexts/DataContext';
import { create } from "./Functions/localStorage";

function Main() {

    const [consumer, setConsumer] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const key = 'consumer';

    useEffect(() => {
        setConsumer(read(key));
      }, [lastUpdate]);
    
    // useEffect(() => {
    // const k = localStorage.getItem("consumer");    if (null === k) {
    // setConsumer([]);    } else {
    // setConsumer(JSON.parse(k));    }  }, []);

    useEffect(() => {
        if (null === createData) {
          return;
        }
        create(key, createData);
        setLastUpdate(Date.now())
      }, [createData]);

    
     return (

        <DataContext.Provider value={{
            setCreateData
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
                        <List  consumer={consumer}/>
                    </div>
                </div>
            </div>
            </DataContext.Provider>
    )
}
export default Main;