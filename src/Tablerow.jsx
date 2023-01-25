function Tablerow({column}) {


    return (
      
            <tr>
                {column.map(val => <th>{val}</th>)}
            </tr>
        
    
    )
}

export default Tablerow