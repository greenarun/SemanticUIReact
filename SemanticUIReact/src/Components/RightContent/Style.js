
import styled from 'styled-components'

export const Content = styled.div`
overflow-y: auto;
`

export const HeaderCont = styled.div`
height:70px;background: #fff;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
-webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
display: inline-block; 
padding: 15px 20px 13px 20px;
width: 100%;
.container{
    padding: 12px 0;
}
`
export const LeftCont = styled.div`
float:left;
display:inline
i{
    color:#000;
    margin:0 25px 0 0;
    font-size:1.2em;
}
.bg-danger{background:#dc3545}
.Notify{position:relative;cursor:pointer}
.count{border-radius: 50%;
    color: #fff;
    font-size: 11px;
    height: 15px;
    width: 15px;
    line-height: 15px;
    right: 14px;
    top: -6px;
    padding-left:4px;
    position: absolute;}

`
export const RightCont = styled.div`
float:right;
display:inline
i{
    color:#000;
    margin:0 25px 0 0;
    font-size:1.2em;
}  
.flag{
    float:left;
    margin:10px 20px;
}
`
export const ProfileImg = styled.img`
border-radius:50%;
height:30px;
width:30px;

`
export const NotifyMenu = styled.div`  
width: 215px;
background: #fff;
height: auto;
padding: 20px;
border: 1px solid #eee;
z-index: 999999;
position: absolute;
top: 25px;
left: 0;
background:#fff;

a{display:block;margin:0;display: block;margin: 0;line-height: 33px;}
i{margin:0}
span{color:#000 !important;margin:0 0 0 5px}
`