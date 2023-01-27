import TableRow from './TableRow';
import TableRowe from './TableRowe';
import TableRowq from './TableRowq';
import TableRoww from './TableRoww';
import TableRowr from './Tablerowr';
import TableRowt from './TableRowt';



function Table({heading, lineNumber, rewarddate, rewardrate, investmentamount, amountToDate, totalrewardamount}) {

return (
    <table  >
                <tbody>
                <thead>
                    <td >
                        # Line
                    </td>
                    <tr>
                    {lineNumber.map(column => <TableRow  column={column} />)}  
                    </tr>
                </thead>
                <thead>
                    <td >
                    Reward Date
                    </td>
                    <tr>
                    {rewarddate.map(columntwo => <TableRowt  columntwo={columntwo} />)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Investment amount
                    </td> 
                    <tr>
                    {investmentamount.map(columnthree => <TableRoww  columnthree={columnthree} />)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Reward amount
                    </td>   
                    <tr>
                    {amountToDate.map(columnfour => <TableRowe  columnfour={columnfour} />)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Total Reward Amount to Date
                    </td> 
                    <tr>
                    {totalrewardamount.map(columnfive => <TableRowr  columnfive={columnfive} />)}  
                    </tr>
                    </thead>
                    <thead>
                    <td >
                    Stacking Reward Rate
                    </td> 
                    <tr>          
                     {rewardrate.map(rewardrat => <TableRowq  rewardrat={rewardrat} />)}
                    </tr>
                    </thead>              
                </tbody>
                 
            </table>
)


}

export default Table