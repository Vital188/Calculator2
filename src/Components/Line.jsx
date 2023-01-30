import Table from './Table';
import moment from "moment/moment";
import DataContext from '../Contexts/DataContext';
import { useContext} from 'react';


function Line  ({ consum, endDate }) {    
        
    const {setDeleteData} = useContext(DataContext);   
    
    let lineNumber = [];
    for(let i = 1 ; i <= (consum.duration)+1; i++) 
    lineNumber.push(i) ;

    let date = new Date(consum.startDate);
    let dt = date.getDate();
    date.setDate(23);
    if (dt < 23) {
      date.setMonth(date.getMonth()-1);
    }
    date.setHours(23, 59, 59, 0);
    let start = moment(date).format('L')
    let starts = new Date(start);
    let endDays = new Date(endDate);
    let rewarddate = [];
    let rewarddates = [];
    let days = [];
    let dif = [];
    let startis = [];
    let endArr = [];
    let daysdifferent = [];
    let todate = [];
    let zero = 0;
    for (let i = 1; i <= (consum.duration)+1; i++){
    rewarddates[i] = moment(starts.setMonth(starts.getMonth())).format('L');
    rewarddates[1] = (consum.startDate);
    rewarddate[i] = moment(starts.setMonth(starts.getMonth()+1)).format('L');
    rewarddate[consum.duration+1] = endDate;
    days[i] = moment(starts.setMonth(starts.getMonth())).format('L');
    days[consum.duration+1] = endDays;
    startis[i] = new Date(days[i]);
    endArr[i] = new Date(rewarddates[i])
    dif[i] = Math.abs(startis[i] - endArr[i]);
    daysdifferent[i] = Math.ceil(dif[i]/ (1000 * 60 * 60 * 24));
    todate[i] =((consum.amount)/100*(consum.rewardRate)/365*daysdifferent[i]);
    todate[1] = zero;
    }

    let newValues = todate.map((curr, i, array) => {
      return array[i] += array[i-1] ? array[i-1] : 0
      })
      
    let investmentamount = [];
    for(let i = 1 ; i <= (consum.duration)+1; i++){
     if (consum.reinvest === 1) {investmentamount[i] = Number((consum.amount) + newValues[i]).toFixed(6)}
     else if (consum.reinvest === 2) {investmentamount[i] = Number(consum.amount).toFixed(6)};
     investmentamount[1] = ((consum.amount).toFixed(6));
    }

    let amountToDate = [];
    for (let i = 1; i <= (consum.duration)+1; i++) {
    amountToDate[i] =(investmentamount[i]/100*(consum.rewardRate)/365*daysdifferent[i]).toFixed(6);
    }
    var nums = amountToDate.map(str => {
      return Number(str);
    });
    let newValuess = nums.map((curr, i, array) => {
      return array[i] += array[i-1] ? array[i-1] : 0
      })

      let totalrewardamount = [];
      for (let i = 1; i <= (consum.duration)+1; i++){ 
      totalrewardamount[i] = Number(newValuess[i]).toFixed(6);
      }

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration)+1; i++){
    if (consum.rewardRate === 8) {rewardrate[i] = (8).toFixed(2) + '%'} 
    else {rewardrate[i] = (10).toFixed(2) + '%'} }


    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    
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