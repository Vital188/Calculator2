import TableRow from './TableRow';
import TableRowe from './TableRowe';
import TableRowq from './TableRowq';
import TableRoww from './TableRoww';
import TableRowr from './Tablerowr';
import TableRowt from './TableRowt';



function Table({heading, lineNumber, rewarddate, rewardrate, investmentamount, amountToDate, totalrewardamount}) {

return (
    <table  >
                <thead>
                    <td >
                        {heading.map(head => <tr style={{border: '1px solid black '}}>{head}</tr>)}
                    </td>
                </thead>
                <tbody>
                    <tr>
                    {lineNumber.map(column => <TableRow  column={column} />)}  
                    </tr>
                    <tr>
                    {rewarddate.map(columntwo => <TableRowt  columntwo={columntwo} />)}  
                    </tr> 
                    <tr>
                    {investmentamount.map(columnthree => <TableRoww  columnthree={columnthree} />)}  
                    </tr>  
                    <tr>
                    {amountToDate.map(columnfour => <TableRowe  columnfour={columnfour} />)}  
                    </tr>
                    <tr>
                    {totalrewardamount.map(columnfive => <TableRowr  columnfive={columnfive} />)}  
                    </tr>
                    <tr>          
                     {rewardrate.map(rewardrat => <TableRowq  rewardrat={rewardrat} />)}
                    </tr>              
                </tbody> 
            </table>
)


}

export default Table