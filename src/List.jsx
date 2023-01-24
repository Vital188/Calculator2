import { useEffect, useState } from 'react';
import Line from './Line';
import { read } from "./Functions/localStorage";

function List() {

    const [consumer, setConsumer] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const key = 'consumer';

    useEffect(() => {
        setConsumer(read(key));
      }, [lastUpdate]);
    
    useEffect(() => {
    const k = localStorage.getItem("consumer");    if (null === k) {
    setConsumer([]);    } else {
    setConsumer(JSON.parse(k));    }  }, []);

        return (
        <div className="card m-4">
            <h5 className="card-header">Ethereum Staking monthly profit schedule</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        consumer?.map(consum => <Line key={consum.id} consum={consum} />)
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;