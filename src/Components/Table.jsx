import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';


const Table = ({ lineNumber, rewarddate, rewardrate, investmentamount, amountToDate, totalrewardamount}) => {
const tableRef = useRef(null);

return (
    <div>

<DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                    
                >
                   <button style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        backgroundColor: '#45cc45'
                    }}> Export excel </button>

                </DownloadTableExcel>
    <table ref={tableRef} >
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
               
                </div>   
)

}

export default Table