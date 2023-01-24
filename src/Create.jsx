import { useState, useContext } from "react";
import Book from "./Contexts/Book";
import Year from "./Components/Data/Year";
import Duration from "./Components/Data/Duration";
import Reinvest from "./Components/Data/Reinvest";
import Rewardrate from "./Components/Data/Rewardrate";

function Create() {
  const [amount, setAmount] = useState('');
  const [startDate, setstartDate] = useState('');
  const [rewardRate, setrewardRate] = useState('0');
  const [duration, setDuration] = useState('0');
  const [reinvest, setReinvest] = useState('0');
  const { setCreateData} = useContext(Book);
 

  const add = () => {
    setCreateData({
      amount,
      startDate,
      rewardRate,
      duration,
      reinvest
    });
    setAmount('')
    setstartDate('');
    setrewardRate('0');
    setDuration('0');
    setReinvest('0')
  };

  const remove = () => {
    setAmount('')
    setstartDate('');
    setrewardRate('0');
    setDuration('0');
    setReinvest('0')
  };


  return (
    <div className="card m-4">
      <h5 className="card-header">New Ethereum Staking customer Data</h5>
      <div className="card-body">
      <div className="card-body">
                <div className="mb-2" style={{
                marginLeft: '-16px',
                marginTop: '-15px',
                marginBottom: '-20px',
            }}>
                    <label className="form-label">Initial Investment Amount of ETH</label>
                    <input startDate="text" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
        </div>
        <label className="form-label">Staking start date</label>
      <select
          className="form-select mb-4"
          
          value={startDate}
          onChange={(e) => setstartDate(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Year?.map((cl) => (
            <option key={cl.id} value={cl.id}>
              {cl.titl}
            </option>
          ))}
        </select>
        <label className="form-label">Yearly stacking reward rate (%)</label>
        <select
          className="form-select mb-4"
          value={rewardRate}
          onChange={(e) => setrewardRate(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Rewardrate?.map((rw) => (
            <option key={rw.id} value={rw.id}>
              {rw.type}
            </option>
          ))}
        </select>
        <label className="form-label">Staking Duration (months)</label>
        <select
          className="form-select mb-4"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Duration?.map((dur) => (
            <option key={dur.id} value={dur.type}>
             {dur.type}
            </option>
          ))}
        </select>
        <label className="form-label">Customer desire to reinvest staking rewards</label>
        <select
          className="form-select mb-4"
          value={reinvest}
          onChange={(e) => setReinvest(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Reinvest?.map((rein) => (
            <option key={rein.id} value={rein.type}>
             {rein.type}
            </option>
          ))}
        </select>
        <div className="buttons" style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
         <button onClick={add} startDate="button" className="btn btn-outline-success">
          Add
        </button>
        <button onClick={remove} startDate="button" className="btn btn-outline-danger">
          Delete
        </button>
        </div>
      </div>
      </div>
      
  );
}

export default Create;
