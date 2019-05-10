import React from 'react';
import styles from './styles.js';
import { withStyles} from '@material-ui/core/styles';
import Iphone from '../../assets/iphoneX.jpg';
import GalaxyS from '../../assets/S10.jpg';

const featured = props =>{
  const { classes} = props;
  let slideIndex=0;

  const showSlides=(n)=>{
    let i;
    let slides=document.getElementsByClassName('featured-carousel-222');
    let dots=document.getElementsByClassName('featured-dots-224')[0].children;

    for(i=0;i< slides.length;i++){
      slides[i].style.display='none';
      dots[i].classList.remove('featured-active-225')
    }
    slides[n].style.display='flex';
    dots[n].classList.add('featured-active-225');
    slideIndex++;
    if(slideIndex>=slides.length) slideIndex=0;
    setTimeout(()=>{ showSlides(slideIndex) },4000);
  }
  window.addEventListener('DOMContentLoaded',function(){
    showSlides(slideIndex);
  })
  return(
    <div className={classes.root}>
      <div className={classes.notch}></div>
      <div  className={[classes.carousel,classes.fade].join(' ')}>
        <img src={Iphone} alt="iphone 10"/>
      </div>
      <div className={[classes.carousel,classes.fade].join(' ')}>
        <img src={GalaxyS} alt="Samsung Galaxy S 10"/>
      </div>
      <div className={classes.dots}><span className={classes.active}></span> <span></span></div>
    </div>
  )
}

export default withStyles(styles)(featured);
