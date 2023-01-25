// import TableRow from './Tablerow';

function Table({heading, body}) {

return (
    <table >
                <thead>
                    <th>
                        {heading.map(head => <th>{head}</th>)}
                    </th>
                </thead>
                <tbody>
                    {body.map(column => <th>{column}</th>)}
                </tbody>
            </table>
)


}

export default Table