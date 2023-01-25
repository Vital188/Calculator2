import Table from './Table'

function Line({ consum }) {

    // eslint-disable-next-line no-array-constructor
    let val = [];
    for(let i = 1 ; i <= (consum.duration); i++) 
    val.push(i) ;

    let dates = [];
    for (let i = 1; i <= (consum.duration); i++) 
    dates[i] = consum.rewardRate;

    let additional = 7/360 - 7/365;
    let amountToDate = [];
    for (let i = 1; i <= (consum.duration); i++) 
    amountToDate[i] = i*additional;
    
    let heading = ['Line #', 'Reward Date', 'Investment amount', 'Reward amount', 'Total Reward Amount to Date', 'Stacking Reward Rate' ];
    let body = val;
    
    console.log(amountToDate)

    return (
        <>
        {/* <table class="table table-bordered">
<thead>
    <tr>
      <th scope="col"># Line</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col"> 
      
      {val}
        </th>
      <td>{consum.rewardRate}</td>
      <td>{consum.amount}</td>
    </tr>
    <tr>
      <th scope="col"></th>
      <td>Jacob</td>
      <td>{val}</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <li className="list-group-item">
            <div className="line" style={{
                justifyContent: 'center'
            }}>
                <div className="line__content" style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                                    <div className="line__content__title">
                     Category:   {consum.amount}
                    </div>
                     <div className="line__content__info">
                     <b>Type:</b>   {consum.duration}
                    </div>
                    <div className="line__content__info">
                    <b> Years:</b>   {consum.rewardRate}
                    </div>
                <div className="line__content__info">
                <b> Color:</b>   {consum.reinvest}
                </div>
                </div>
                <div className="line__buttons" style={{
                    margin: '0px'
                }}>
                   
                </div>
            </div>
        </li>

        <thead>
            <tr>
                <th >Month</th>
                <th >Principal</th>
                <th >Interest</th>
                <th >Payment</th>
                <th >Balance</th>
            </tr>
        </thead>
        <tbody>
        
                <tr>
                    <th >{val}</th>
                    <td ></td>
                    <td >{consum.rewardDate}</td>
                    <td >{consum.rewardDate}</td>
                    <td >{consum.rewardDate}</td>
                </tr>
            {consum.duration}
        </tbody>
        <tfoot>
            {consum.duration}
                <tr>
                    <th >Totals</th>
                    <td >{consum.rewardRate}</td>
                    <td >{consum.rewardDate}</td>
                    <td >{consum.rewardDate}</td>
                    <td ></td>
                </tr>
          
        </tfoot> */}

        <div >
                <Table heading={heading} body={body} dates={dates} />,
            </div>
    
        </>
    )
}

export default Line;