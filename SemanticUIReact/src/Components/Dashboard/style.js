import styled from 'styled-components'

export const DashHeading = styled.div`
height:55px;background: #fff;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
-webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
display: inline-block; 
padding: 15px 20px 13px 20px;
margin:3px 0 0 0;
width: 100%;
.container{
    padding: 12px 0;
}
`
export const DashLeftTitle = styled.div` 
float:left;
display:inline;
`
export const DashRightTitle = styled.div` 
float:right;
display:inline;
`

export const DashCont = styled.div` 
overflow:hidden;
.chartCont{
    height:250px;
    padding: 0 17px;
}
.chartCont .row .column{
    padding:15px;
    background:#17a2b8;
    border:15px solid #f1f2f7;
    border-bottom:0 none;
}
.chartCont .row .column:nth-child(2){ 
    background:#20c997;
}
.chartCont .row .column:nth-child(3){ 
    background:#ffc107;
}
.chartCont .row .column:nth-child(4){ 
    background:#e83e8c;
}
.infoContent{height:140px;}
.infoContent .row .column{background:#fff !important;border-top:0 none;}
.infoContent .iconWrap{border-radius:50%;height:70px;width:70px;border:5px solid #2e8642; margin: 9px 0;float:left;display:inline}
.infoContent .greenIcon i{color:#2e8642; margin: 19px 3px;font-size:3.2em}
.infoContent .greyIcon i{color:#17a2b8; margin: 19px 7px;font-size:2.7em}
.infoContent .iconWrap.greyIcon{border:5px solid #17a2b8; }
.infoContent .yellowIcon i{color:#ffc107; margin: 19px 7px;font-size:2.7em}
.infoContent .iconWrap.yellowIcon{border:5px solid #ffc107; }
.infoContent .redIcon i{color:#dc3545; margin: 19px 7px;font-size:2.7em} 
.infoContent .iconWrap.redIcon{border:5px solid #dc3545; }
.infoContent .darkIcon i{color:#868e96; margin: 19px 7px;font-size:2.7em;}
.infoContent .iconWrap.darkIcon{border:0 none }
.infoContent .contentWrap{float:left;display:inline;margin:17px 0 0 17px}
.infoContent .contentWrap b{font-size:18px}
@media screen and (max-width:768px) {
    .chartCont{height:100%}
    .ui.grid.chartCont>[class*="four column"].row>.column {
        width: 100%!important;
        height:279px;
    }
    .ui.grid.infoContent>[class*="four column"].row>.column {
        width: 100%!important;
        height:120px;
        margin-bottom:20px;
    }
}
`

export const ColumnTitle = styled.p`
h4{  
    color:#fff;
    font-weight:300;
    margin:0;
}
`