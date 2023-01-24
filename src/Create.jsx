import { useState, useContext } from "react";
// import DataContext from "./Contexts/DataContext";
import Book from "./Contexts/Book";
// import getBase64 from "./Functions/getBase64";
import Year from "./Components/Data/Year"

function Create() {
  const [titl, setTitl] = useState('0');
  const [type, setType] = useState('');
  const [years, setYears] = useState('0');
  // const [color, setColor] = useState('0');
  // const [price, setPrice] = useState("");
  // const fileInput = useRef();

  const { setCreateData, category } = useContext(Book);
  // const { makeMsg } = useContext(DataContext);

  // const [photoPrint, setPhotoPrint] = useState(null);

  // const doPhoto = () => {
  //   getBase64(fileInput.current.files[0])
  //     .then((photo) => setPhotoPrint(photo))
  //     .catch((_) => {
     
  //     });
  // };

  const add = () => {
    setCreateData({
      cat_id:  parseInt(titl),
      type,
      years,
      // image: photoPrint
    });
    setTitl('0')
    setType('');
    setYears('0');
  };

  const remove = () => {
    setTitl('0')
    setType('');
    setYears('0');
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
                    <input type="text" className="form-control" value={type} onChange={e => setType(e.target.value)} />
                </div>
        </div>
        <label className="form-label">Staking start date</label>
      <select
          className="form-select mb-4"
          
          value={titl}
          onChange={(e) => setTitl(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {category?.map((cl) => (
            <option key={cl.id} value={cl.id}>
              {cl.titl}
            </option>
          ))}
        </select>
        <label className="form-label">Yearly stacking reward rate</label>
        <select
          className="form-select mb-4"
          value={titl}
          onChange={(e) => setTitl(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {category?.map((cl) => (
            <option key={cl.id} value={cl.id}>
              {cl.titl}
            </option>
          ))}
        </select>
        <label className="form-label">Staking Duration</label>
        <select
          className="form-select mb-4"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Year?.map((size) => (
            <option key={size.id} value={size.type}>
             {size.type}
            </option>
          ))}
        </select>
        <label className="form-label">Customer desire to reinvest staking rewards</label>
        <select
          className="form-select mb-4"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          aria-label="Default select example"
        >
          <option value={0} disabled>
            Choose from list:
          </option>
          {Year?.map((size) => (
            <option key={size.id} value={size.type}>
             {size.type}
            </option>
          ))}
        </select>
        <div className="buttons" style={{
          display: 'flex'
        }}>
         <button onClick={add} type="button" className="btn btn-outline-success">
          Add
        </button>
        <button onClick={remove} type="button" className="btn btn-outline-danger">
          Delete
        </button>
        </div>
      </div>
      </div>
      
  );
}

export default Create;
