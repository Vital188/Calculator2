

function Line({ consum }) {



    return (
        <>
        <table class="table table-bordered">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
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
        </>
    )
}

export default Line;