import TableRow from './TableRow';
import TableRowq from './TableRowq';
import TableRoww from './TableRoww';


function Table({heading, lineNumber, rewardrate, investmentamount}) {

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
                    {lineNumber.map(column => <TableRow  column={column} />)}  
                    </tr> 
                    <tr>
                    {investmentamount.map(columnthree => <TableRoww  columnthree={columnthree} />)}  
                    </tr>  
                  
                    <tr>          
                     {rewardrate.map(rewardrat => <TableRowq  rewardrat={rewardrat} />)}
                    </tr>              
                </tbody> 
            </table>
)


}

export default Table