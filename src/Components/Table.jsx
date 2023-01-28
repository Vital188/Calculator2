



const Table = ({ lineNumber, rewarddate, rewardrate, investmentamount, amountToDate, totalrewardamount}) => {


return (
    
    <table >
                <tbody>
                <thead>
                    <td >
                        # Line
                    </td>
                    <tr>
                    {lineNumber.map(column => <th>{column}</th>)}  
                    </tr>
                </thead>
                <thead>
                    <td >
                    Reward Date
                    </td>
                    <tr>
                    {rewarddate.map(columntwo => <th>{columntwo}</th>)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Investment amount
                    </td> 
                    <tr>
                    {investmentamount.map(columnthree => <th>{columnthree}</th>)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Reward amount
                    </td>   
                    <tr>
                    {amountToDate.map(columnfour => <th>{columnfour}</th>)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Total Reward Amount to Date
                    </td> 
                    <tr>
                    {totalrewardamount.map(columnfive => <th>{columnfive}</th>)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Stacking Reward Rate
                    </td> 
                    <tr>          
                     {rewardrate.map(columnsix => <th>{columnsix}</th>)}
                    </tr>
                    </thead>              
                </tbody>
                 
            </table>

          
)


}

export default Table