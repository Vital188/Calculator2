import Table from './Table'

function Line({ consum }) {

    // eslint-disable-next-line no-array-constructor
    let lineNumber = [];
    for(let i = 1 ; i <= (consum.duration); i++) 
    lineNumber.push(i) ;

    let rewardrate = [];
    for (let i = 1; i <= (consum.duration); i++) 
    rewardrate[i] = consum.rewardRate;

    let additional = 7/360 - 7/365;
    let amountToDate = [];
    for (let i = 1; i <= (consum.duration); i++) 
    amountToDate[i] = i*additional;

    let investmentamount = [];
    for(let i = 1 ; i <= (consum.duration); i++)
    investmentamount[i] = ((consum.amount) + amountToDate[i]).toFixed(6);
    
    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    
    
    console.log(amountToDate)

    return (
        <>
 
            <div >
                <Table heading={heading} lineNumber={lineNumber} rewardrate={rewardrate} investmentamount={investmentamount} />,
            </div>
    
        </>
    )
}

export default Line;