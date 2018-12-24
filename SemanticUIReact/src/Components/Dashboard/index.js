import React, { Component } from 'react';
import {Line,Bar} from 'react-chartjs-2'
import AnimatedNumber from 'react-animated-number';
import {
    Icon,
    Grid
  } from 'semantic-ui-react'
import { DashCont,DashLeftTitle,DashRightTitle,DashHeading,ColumnTitle } from './style';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset', 
        fill: false,
        lineTension: 0.1, 
        borderColor: 'rgba(256,256,256,1)',
        borderWidth: 1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(256,256,256,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset', 
        fill: false,
        lineTension: 0.6, 
        borderColor: 'rgba(256,256,256,1)',
        borderWidth: 1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(256,256,256,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const data3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset', 
        fill: true,
        lineTension: 0.4, 
        borderColor: 'rgba(256,256,256,1)',
        borderWidth: 1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(256,256,256,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  
  const options= {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            display: false
        }   
        }]
    }
}
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( <DashCont>
                        <DashHeading>
                            <DashLeftTitle>Dashboard</DashLeftTitle>
                            <DashRightTitle>Dashboard/Widget</DashRightTitle>
                        </DashHeading> 
                        <Grid className="chartCont">
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <ColumnTitle>
                                    <h4> <AnimatedNumber component="text" value="10939"
                                    style={{
                                        transition: '0.8s ease-out', 
                                        transitionProperty:'background-color, color, opacity'
                                    }} duration={2000} /></h4>
                                    <h4>Members Online</h4>
                                </ColumnTitle>
                                <Line
                                        data={data}
                                        width={100}
                                        height={50}
                                        options={options}
                                    />
                            </Grid.Column>
                            <Grid.Column>
                                <ColumnTitle>
                                <h4> <AnimatedNumber component="text" value="10939"
                                    style={{
                                        transition: '0.8s ease-out', 
                                        transitionProperty:'background-color, color, opacity'
                                    }} duration={1500} /></h4>
                                    <h4>Members Online</h4>
                                </ColumnTitle>
                                <Line
                                        data={data1}
                                        width={100}
                                        height={50}
                                        options={options}
                                    />
                            </Grid.Column>
                            <Grid.Column>
                                <ColumnTitle>
                                <h4> <AnimatedNumber component="text" value="10939"
                                    style={{
                                        transition: '0.8s ease-out', 
                                        transitionProperty:'background-color, color, opacity'
                                    }} duration={3000} /></h4>
                                    <h4>Members Online</h4>
                                </ColumnTitle>
                                <Line
                                        data={data3}
                                        width={100}
                                        height={50}
                                        options={options}
                                    />
                            </Grid.Column>
                            <Grid.Column>
                                <ColumnTitle>
                                <h4> <AnimatedNumber component="text" value="10939"
                                    style={{
                                        transition: '0.8s ease-out', 
                                        transitionProperty:'background-color, color, opacity'
                                    }} duration={2500} /></h4>
                                    <h4>Members Online</h4>
                                </ColumnTitle>
                                <Bar
                                        data={data3}
                                        width={100}
                                        height={50}
                                        options={options}
                                    />
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>                        
                        <Grid className="chartCont infoContent">
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <div className="iconWrap greenIcon">
                                    <Icon name='dollar sign' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Total Profit</h5>
                                    <b>1,012</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap greyIcon">
                                    <Icon name='user outline' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Customers</h5>
                                    <b>961</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap yellowIcon">
                                    <Icon name='book' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Projects</h5>
                                    <b>770</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap redIcon">
                                    <Icon name='paperclip' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Referrels</h5>
                                    <b>199</b>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid> 

                        <Grid className="chartCont infoContent">
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <div className="iconWrap darkIcon">
                                    <Icon name='copy outline' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Total Profit</h5>
                                    <b>1,012</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap darkIcon">
                                    <Icon name='cubes' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Customer</h5>
                                    <b>961</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap darkIcon">
                                    <Icon name='file alternate outline' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Projects</h5>
                                    <b>770</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="iconWrap darkIcon">
                                    <Icon name='hourglass outline' />
                                </div> 
                                <div className="contentWrap">
                                    <h5>Referrels</h5>
                                    <b>199</b>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid> 
                </DashCont> );
    }
}
 
export default Dashboard;