import TableRow from './Tablerow';

function Table({heading, body, dates}) {

return (
    <table  >
                <thead>
                    <td >
                        {heading.map(head => <tr style={{border: '1px solid black '}}>{head}</tr>)}
                    </td>
                </thead>
                <tbody>
                    <tr>
                    {body.map(column => <TableRow  column={column} />)}  
                    </tr> 
                    <tr>          
                    {dates.map(date => <TableRow  date={date} />)}
                    </tr>              
                </tbody>
            </table>
)


}

export default Table