import Table from './Table';
import moment from "moment/moment";
import DataContext from '../Contexts/DataContext';
import { useContext } from 'react';

function Line({ consum }) {
    
    const {setDeleteData} = useContext(DataContext);   
    
    let lineNumber = [];
    for(let i = 1 ; i <= (consum.duration); i++) 
    lineNumber.push(i) ;


    let date = new Date();
    let dt = date.getDate();
    date.setDate(15);
    if (dt >= 15) {
      date.setMonth(date.getMonth() + 1);
    }
    date.setHours(23, 59, 59, 0);
    let start = moment(date).format('L')
    let starts = new Date(start);
    let startDates = new Date(consum.startDate);
    let difference = Math.abs(starts - startDates);
    const diffDays = Math.ceil(difference/ (1000 * 60 * 60 * 24))
    
    let rewarddate = [];
    for (let i = 1; i <= (consum.duration); i++)
    rewarddate[i] = moment(starts.setMonth(starts.getMonth()+1)).format('L');
    
    console.log(diffDays, rewarddate);

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration); i++){
        if (consum.rewardRate === 7) {rewardrate[i] = (7).toFixed(2) + '%'} 
        else {rewardrate[i] = (10).toFixed(2) + '%'} }
    

    let additional = 7/360 - 7/365;
    let amountToDate = [];
    for (let i = 1; i <= (consum.duration); i++) 
    amountToDate[i] = (i*additional).toFixed(6);

    let investmentamount = [];
    for(let i = 1 ; i <= (consum.duration); i++)
    investmentamount[i] = Number((consum.amount) + amountToDate[i]).toFixed(6);

    let totalrewardamount = [];
    for (let i = 1; i <= (consum.duration); i++) 
    totalrewardamount[i] = (++amountToDate[i]).toFixed(6);
    
    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    
    
 

    return (
        <>
 
            <div >
                <Table heading={heading} rewarddate={rewarddate} lineNumber={lineNumber} amountToDate={amountToDate} rewardrate={rewardrate} investmentamount={investmentamount} totalrewardamount={totalrewardamount} />,
            </div>
            <button onClick={() => setDeleteData(consum)}  className="btn btn-outline-danger">
          Delete
        </button>
    
        </>
    )
}

export default Line;