import Table from './Table';
import moment from "moment/moment";

function Line({ consum }) {

    // eslint-disable-next-line no-array-constructor
    let lineNumber = [];
    for(let i = 1 ; i <= (consum.duration); i++) 
    lineNumber.push(i) ;

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration); i++){
        if (consum.rewardRate === 7) {rewardrate[i] = (7).toFixed(2) + '%'} 
        else {rewardrate[i] = (10).toFixed(2) + '%'} }
    // rewardrate[i] = consum.rewardRate;

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
    
    
    console.log(amountToDate)

    return (
        <>
 
            <div >
                <Table heading={heading} lineNumber={lineNumber} amountToDate={amountToDate} rewardrate={rewardrate} investmentamount={investmentamount} totalrewardamount={totalrewardamount} />,
            </div>
    
        </>
    )
}

export default Line;