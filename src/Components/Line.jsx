import Table from './Table';
import moment from "moment/moment";
import DataContext from '../Contexts/DataContext';
import { useContext, useRef} from 'react';


function Line  ({ consum, endDate }) {    
        
    
    const {setDeleteData} = useContext(DataContext);   
    
    let lineNumber = [];
    for(let i = 1 ; i <= (consum.duration)+1; i++) 
    lineNumber.push(i) ;


    let date = new Date();
    let dt = date.getDate();
    date.setDate(23);
    if (dt <= 23) {
      date.setMonth(date.getMonth() + 1);
    }
    date.setHours(23, 59, 59, 0);
    let start = moment(date).format('L')
    let starts = new Date(start);
    let startDates = new Date(consum.startDate);
    let difference = Math.abs(starts - startDates);
    const diffDays = Math.ceil(difference/ (1000 * 60 * 60 * 24))
    
    let rewarddate = [];
    let rewarddates = [];
    for (let i = 1; i <= (consum.duration); i++)
    rewarddate[i] = moment(starts.setMonth(starts.getMonth()+1)).format('L');
    rewarddates = rewarddate.push((endDate));
    

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration)+1; i++){
    if (consum.rewardRate === 8) {rewardrate[i] = (8).toFixed(2) + '%'} 
    else {rewardrate[i] = (10).toFixed(2) + '%'} }
    

    let additional = Number((consum.amount)/100*(consum.rewardRate)/365*30).toFixed(6);
    let amountToDate = [];
    let todate = [];
    for (let i = 1; i <= (consum.duration)+1; i++) {
    amountToDate[i] =((additional)*i).toFixed(6);
    todate[i] =((additional)*i)-1;
    }
    
    let investmentamount = [];
    for(let i = 1 ; i <= (consum.duration)+1; i++){
     if (consum.reinvest === 1) {investmentamount[i] = Number((consum.amount) + todate[i]+1).toFixed(6)}
     else {investmentamount[i] = Number(consum.amount).toFixed(6)};
    }

    let totalrewardamount = [];
    for (let i = 1; i <= (consum.duration)+1; i++){ 
    totalrewardamount[i] = (++todate[i]).toFixed(6);
    }
    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    
    console.log(rewarddate, rewarddates)


    return (
        <>
 
            <div >
                <Table  heading={heading} rewarddate={rewarddate} lineNumber={lineNumber} amountToDate={amountToDate} rewardrate={rewardrate} investmentamount={investmentamount} totalrewardamount={totalrewardamount} />,
            </div>
            <button onClick={() => setDeleteData(consum)}  className="btn btn-outline-danger">
          Delete
        </button>
        
        </>
    )

    }
 

export default Line;