import Line from './Line';
import moment from 'moment/moment';
// import { CSVDownload } from "react-csv";

function List({consum}) {


    let futureYear = '';
    let startdate = (consum.startDate);
    if (consum.duration === 12){futureYear = moment(startdate).add(1, 'Y')}
    else if (consum.duration === 24){futureYear = moment(startdate).add(2, 'Y')}
    else if (consum.duration === 36){futureYear = moment(startdate).add(3, 'Y')};
    let endDate = moment(futureYear).format('L');

    let rewardrate = '';
    if (consum.rewardRate === 8) {rewardrate = (8).toFixed(2) + '%'}
    else if (consum.rewardRate === 10) {rewardrate = (10).toFixed(2) + '%'};

    let reinvest = ''
    if (consum.reinvest === 1) {reinvest = 'Yes'}
    else if (consum.reinvest === 2) {reinvest = 'No'};

        return (
        <div className="card m-4">
            <h5 className="card-header">Ethereum Staking monthly profit schedule</h5>
            <div className="card-body">
            <div className="row">
    <div className="col" style={{
        display: 'flex',
        fontSize: '20px',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        marginTop: '-16px',
        marginLeft: '14px',
        marginRight: '14px'
    }}>
      <b>General Information</b>
    </div>
      </div>
  <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>Client ID:</b> {consum.id}
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>Initial Investment:</b> {consum.amount}
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>Yearly Stacking Reward:</b> {rewardrate}
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
     <b>Start Date:</b> {consum.startDate}
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>End Date:</b> {endDate}
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>Reward Payment Date:</b> 23
    </div>
    </div>
    <div className="row">
    <div className="col" style={{
            border: '1px solid black',
            margin: '0 15px'
    }}>
      <b>Reinvestment Stacking Reward:</b> {reinvest}
    </div>
    </div>
    <div className="col" style={{
        display: 'flex',
        fontSize: '20px',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    }}>
      <b>Profit Schedule</b>
    </div>
                <ul className="list-group">
                   <Line consum={consum} endDate={endDate} />
                </ul>
            </div>
        </div>
        
    );
}

export default List;