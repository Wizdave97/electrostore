import React,{ useEffect } from 'react';
import styles from './styles.js';
import { withStyles} from '@material-ui/core/styles';
import Iphone from '../../assets/iphoneX.jpg';
import GalaxyS from '../../assets/S10.jpg';

const Featured = props =>{
  const { classes} = props;
  let slideIndex=0;

  const showSlides=(n)=>{
    let i;
    let slides=document.getElementsByClassName('carousel');
    let dots=document.getElementsByClassName('dots')[0].children;

    for(i=0;i< slides.length;i++){
      slides[i].style.display='none';
      dots[i].classList.remove('active')
    }
    slides[n].style.display='flex';
    dots[n].classList.add('active');
    slideIndex++;
    if(slideIndex>=slides.length) slideIndex=0;
  }
  useEffect(()=>{
    let slideShow=setInterval(()=>showSlides(slideIndex),4000);
    return ()=>{
      clearInterval(slideShow)
    }
  })
  return(
    <div className={classes.root}>
      <div className={classes.notch}></div>
      <div  className={[classes.carousel,classes.fade,'carousel'].join(' ')}>
        <img src={Iphone} alt="iphone 10"/>
      </div>
      <div className={[classes.carousel,classes.fade,'carousel'].join(' ')}>
        <img src={GalaxyS} alt="Samsung Galaxy S 10"/>
      </div>
      <div className={[classes.dots,'dots'].join(' ')}><span className={[classes.active,'active'].join(' ')}></span> <span className='active'></span></div>
    </div>
  )
}

export default withStyles(styles)(Featured);
