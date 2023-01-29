import Table from './Table';
import moment from "moment/moment";
import DataContext from '../Contexts/DataContext';
import { useContext, useRef} from 'react';


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
    let startDates = new Date(consum.startDate);
    let difference = Math.abs(starts - startDates);
    const diffDays = Math.ceil(difference/ (1000 * 60 * 60 * 24));
    let endDays = new Date(endDate);

    let rewarddate = [];
    let rewarddates = [];
    let days = [];
    let dif = [];
    let startis = [];
    let endArr = [];
    let daysdifferent = [];
    for (let i = 1; i <= (consum.duration)+1; i++){
    rewarddates[i] = moment(starts.setMonth(starts.getMonth())).format('L');
    rewarddates[1] = (consum.startDate);
    // rewarddates[consum.duration + 1] = endDate;
    rewarddate[i] = moment(starts.setMonth(starts.getMonth()+1)).format('L');
    rewarddate[consum.duration+1] = endDate;
    days[i] = moment(starts.setMonth(starts.getMonth())).format('L');
    days[consum.duration+1] = endDays;
    startis[i] = new Date(days[i]);
    endArr[i] = new Date(rewarddates[i])
    dif[i] = Math.abs(startis[i] - endArr[i]);
    daysdifferent[i] = Math.ceil(dif[i]/ (1000 * 60 * 60 * 24));
    }

    // let dates = moment(date).format('L');
    // let date2 = moment(date).format('L');
    // let daydif = [];
    // for(let i = 1 ; i <= (consum.duration)+1; i++) {
    // dates = new Date(rewarddates[i]);
    // date2 = new Date(rewarddates[i+1])

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration)+1; i++){
    if (consum.rewardRate === 8) {rewardrate[i] = (8).toFixed(2) + '%'} 
    else {rewardrate[i] = (10).toFixed(2) + '%'} }
    

    // let additional = Number((consum.amount)/100*(consum.rewardRate)/365*daysdifferent[i]).toFixed(6);
    let amountToDate = [];
    let todate = [];
    let zero = 0;
    // let note = 0
    for (let i = 1; i <= (consum.duration)+1; i++) {
    amountToDate[i] =((consum.amount)/100*(consum.rewardRate)/365*daysdifferent[i]).toFixed(6);
    todate[i] =((consum.amount)/100*(consum.rewardRate)/365*daysdifferent[i]);
    todate[0] = zero;
    // note = todate[i] + todate[i+1];
    // pavr =  todate.reduce(previousValue, currentValue) => (previousValue + currentValue)
    }
    
    let investmentamount = [];
    for(let i = 1 ; i <= (consum.duration)+1; i++){
     if (consum.reinvest === 1) {investmentamount[i] = Number((consum.amount) + todate[i]).toFixed(6)}
     else {investmentamount[i] = Number(consum.amount).toFixed(6)};
    }


      let newValues = todate.map((curr, i, array) => {
        return array[i] += array[i-1] ? array[i-1] : 0
      })
    let totalrewardamount = [];
    for (let i = 1; i <= (consum.duration)+1; i++){ 
    totalrewardamount[i] = (newValues[i]).toFixed(6);
    }


  //  let mavr = [];
  //   for (let i = 1; i <= (consum.duration)+1; i++){ 
  //     pavr[0] = todate[0] + todate[1];
      // mavr[i] = todate[i].reduce(
      //   (accumulator, currentValue) => accumulator + currentValue,
      //   0,
      // );
      // }

      
      
      
        
     

      

  //  pavr = todate.map((i) => i + [i+1]);

    // [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
    //   console.log(previousValue + currentValue);
    // });

    // let sum = [];
    // for (let i = 0; i < 
    //   todate.length; i++) {
    //   // take every item in the array and add it to sum variable
    //   sum[i] += todate[i]
      // initial: sum = 0 
      // iteration 1: 0 + 1 => sum = 1
      // iteration 2: 1 + 4 => sum = 5
      // iteration 3: 5 + 0 => sum = 5
      // iteration 4: 5 + 9 => sum = 14
      // iteration 5: 14 + -3 => sum = 11
    
      // }
    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    
    console.log(newValues);


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