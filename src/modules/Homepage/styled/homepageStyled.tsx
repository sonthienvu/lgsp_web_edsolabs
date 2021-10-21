import styled from 'styled-components';

const Styled = {
  Container: styled.div`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}

/* common css */
.main-color {
  background-color: #FF6060 !important;
}

.font-weight__400 {
  font-weight: 400;
}

.font-weight__700 {
  font-weight: 700;
}

.white-text {
  color: #fff;
}

.header__flex {
  display: flex;
  justify-content: center;
}
.header--blue-text{
  font-size: 32px;
  padding-top: 45px;
  color: #2B61EB;
  text-align: center;
}
.header--line { 
  background-color: #FF6060;
  height: 10px;
  width: 180px;
  border-radius: 5px;
  margin-top: 12px;
  margin-bottom: 50px;
}

/* header */
body {
  min-width: 1280px;
}

.header {
  display: flex !important;
  justify-content: space-between !important;
  height: 155px !important;
  position: relative;
  border-bottom: 0.5px solid #717171;
  width: 100%;
}

.header--left {
  display: flex;
  align-items: center;
}

.header--logo {
  position: absolute;
  left: 55px;
  top: 33px;
  width: 100px;
}
.header--logo img {
  width: 100%;
  height: 100%;
}

.header--text {
  position: absolute;
  left: 192px;
  top: 48px;
}
.header--text h1 {
  text-transform: uppercase;
  font-size: 24px;
}

.header--right {

}
.header--right ul {
  position: absolute;
  top: 70px;
  right: 62px;
}
.header--right li {
  font-size: 24px;
  display: inline-block;
  font-weight: 400;
}
.header--right a{
  padding: 20px 30px;
  color: #fff;
  text-decoration: none;
}
.header--right a:hover, .header--right a.active  {
  color: #EB303C;
  border-radius: 50px;
  background-color: #DEDEDE;
}

/* lgsp present */
.lgsp-present {
  background-color: #FF6060;
  color: #fff;
}

.lgsp-present--text {
  margin: 0 80px;
}
.lgsp-present--text h2 {
  color: #fff;
  font-size: 24px;
  padding-top: 80px;
}


.lgsp-detail--1, .lgsp-detail--2 {
  font-size: 18px;
  line-height: 21px;
}
.lgsp-detail--1 {
  padding-top: 24px;
}

.lgsp-detail--2 {
  padding-top: 35px;
}
.lgsp-detail--2 h4 {
  color: #fff;
}
.lgsp-detail--2 p {
  margin: 0;
}

.lgsp-reg {
  padding: 50px 0 50px;
}

.lgsp-reg-btn {
  background: #4569E8;
  border-radius: 8px;
  color: #fff;
  padding: 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
/* lgsp model */
.lgsp-model {
    background-color: #FFF8F8;
    padding-bottom: 36px;
}

.lgsp-model--header {
    display: flex;
    justify-content: center;
}


.lgsp-model--slide {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.previous-slide-image, .next-slide-image {
    cursor: pointer;
    width: 27px;
}
.previous-slide-image img, .next-slide-image img{
  width: 100%;
}
.lgsp-slide-image {
    width: 1200px;
    height: 700px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 20px;
}
.lgsp-slide-image p {
    text-align: center;
    font-size: large;
    
}

/* Services processing */
.src-process {
    background-color: #DDDDDD;
    padding-bottom: 36px;
}

.src-process--header {

}

.src-process--list {
    display: flex;
    justify-content: space-around;
    margin: 0px 80px 44px 80px;
}

.src-process--item {
    width: 240px;
    height: 300px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.src-process--item p:nth-last-child(1) {
    color: #FF6060;
    padding-top: 16px;
}

/* connect units */
.connect-unit {
}

.inside-unit, .outside-unit {
    margin: 0 150px 50px;
}
.inside-unit {
    border-bottom: 1px solid #FF6060;
    
}

.unit--header {
    color: #FF6060;
    margin-bottom: 80px;
}
.unit--header h1 {
    border: 1px solid #FF6060;
    border-radius: 50px;
    max-width: 300px;
    font-size: 28px;
    font-weight: 400;
    padding: 20px 40px;
}


.unit-item {    
    
}
.unit-item--list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

.unit-infor {   
    display: inline-flex;
    font-size: 22px;
    line-height: 26px;
}
.unit-infor--img {
    margin-right: 18px;
    width: 55px;
    /* height: 50px; */
}
.unit-infor--img img {
    width: 100%;

}
.unit-infor--text {

}
.unit-infor--text p{

}
.unit-infor--text a{
    text-decoration: none;
    color: #000;
    opacity: 0.5;
}

/* general statistics */
.general-statistics {
    margin-bottom: 36px;
    padding-bottom: 36px;
    background-color: #EBFFF1;
}

.general-statistics--list {
    display: flex;
    justify-content: space-around;
}

.general-statistics--item {
    width: 317px;
    height: 338px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    align-content: space-around;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.general-statistics--img img {
    width: 48px;
}

.general-statistics--title p{
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FF6060;
    max-width: 205px;
}

.general-statistics--counter p{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;
    color: #15BF06;
    background: #FFFFFF;
    border: 2px solid #15BF06;
    box-sizing: border-box;
    border-radius: 50px;
    border-radius: 50px;
    padding: 15px 45px;
    }
    /* footer */
.homepage-footer {
    min-height: 275px;
    display: flex;
    justify-content: flex-start;

.hp-footer--logo {
    margin: 0px 100px;
}
.hp-footer--logo img{
    width: 170px;
}


.hp-footer--infor {
    width: 100%;
    margin-right: 60px;
}
.hp-footer--header {
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000000;
}
.hp-footer--header h4{
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
}

.hp-footer--contact {
  color: #000;

}
.hp-footer--contact img {
    display: block;
    margin-right: 10px;
}
.hp-footer--contact img, p {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
}
.hp-footer--contact ul{
    list-style-type: none;
}
.hp-footer--contact li{
    display: flex;
    font-style: normal;
    margin-bottom: 16px;
}


/* > PC low resolution */
@media (min-width: 1025px) and (max-width: 1280px) {
    .header--logo {
        left: 30px;
    }
    .header--text {
        left: 165px;
    }
    .header--right ul { 
        right: 30px;
    }
}
/* Tablet - PC low resolution */
    @media (min-width: 769px) and (max-width: 1024px) {
        /* header */
    .header {
        height: 255px !important;
    }
    .header--right ul {
        top: 165px;
        left: 57px;
    }
    .header--right li {
        margin-right: 60px;
    }
    /* lgsp model */
    .lgsp-slide-image {
        width: 95%;
    }
    .previous-slide-image, .next-slide-image {
        display: none;
    }
    /* service processing */
    .src-process--list {
        margin: 0px 50px 50px;
    }

    .src-process--item {
        width: 25%;
        margin: 0 16px;
    }
    /* units connected */
    .inside-unit, .outside-unit {
        margin: 0 100px 50px;
    }
    /* genaral statistics */
    .general-statistics--list {
        margin: 0;
    }
    .general-statistics--item {
        width: 25%;
        margin: 0 8px;
    }

}


/* >= Tablet */
@media  (min-width: 481px) and (max-width: 768px) {
    /* header */
    .header {
        height: 255px !important; 
    }
    .header--right ul {
        top: 165px;
        left: 57px;
    }
    .header--right li {
        margin: 0;
    }
    .header--right li > a {
      
    }
    /* lgsp model */
    .lgsp-slide-image {
        width: 95%;
    }
    .previous-slide-image, .next-slide-image {
        display: none;
    }
    /* service processing */
    .src-process--list {
        margin: 0px 25px 50px;
    }

    .src-process--item {
        width: 25%;
        margin: 0 8px;
    }
    /* units connected */
    .inside-unit, .outside-unit {
        margin: 0 50px 50px;
    }
    /* genaral statistics */
    .general-statistics--list {
        margin: 0;
    }
    .general-statistics--item {
        width: 25%;
        margin: 0 4px;
    }

}
/* mobile */
@media (max-width: 479px) {
    /* header */
    .header--logo {
        left: 5px;
        top: 5px;
        width: 90px;
    }
    .header--text {
        left: 110px;
        top: 12px;
    }
    .header--right {
        display: none;
    }
    /* lgsp present */
    .lgsp-present--text {
        margin: 0 16px;
    }
    /* lgsp model */
    .previous-slide-image, .next-slide-image {
        display: none;
    }
    .lgsp-slide-image {
        width: 95%;
        height: 300px;
        margin-bottom: 36px;

    }
    /* src processing */
    .src-process {
        padding-bottom: 36px;
    }    
    .src-process--list {
        display: block;
    }   
    .src-process--item {
        width: 100%;
        margin-bottom: 24px;
    } 
    /* units connected */
    .inside-unit, .outside-unit {
        margin: 0 30px 50px;
    }
    .unit-infor {
        display: block;
    }
    .unit-infor--text p, a {
        font-size: 16px;
        line-height: 16px;
    }
    /* general statistics */
    .general-statistics {
        padding-bottom: 36px;
    }
    .general-statistics--list {
        flex-wrap: wrap;
    }
    .general-statistics--item {
      margin-bottom: 16px;
    }

    /* footer */
    .homepage-footer {
        flex-direction: column;
        margin-left: 12px;
    }
    .hp-footer--logo {
        margin: 0px 34px 16px;
    }


}





`,
};
export default Styled;
