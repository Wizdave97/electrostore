export const readFileAsUrl = (file) =>{
  return new Promise(resolve=>{
    const fileReader=new FileReader();
    fileReader.onload=(event)=>{
      resolve(event.target.result)
    }
    fileReader.readAsDataURL(file)
  })
}

export const imageResize = (imageUrl,type) =>{
  return new Promise(resolve=>{
    let canvas= document.createElement('canvas');
    let maxHeight= 100;
    let image= new Image();
    image.onload=(event)=>{
      const ctx=canvas.getContext('2d');
      if(image.height > maxHeight){
        image.width *= maxHeight/image.height ;
        image.height=maxHeight
      }
      ctx.clearRect(0,0,canvas.width,canvas.height);
      canvas.height=image.height;
      canvas.width=image.width;
      ctx.drawImage(image,0,0,image.width,image.height);
      canvas.toBlob((blob)=>{
        resolve(blob)
      },type)
    }
    image.src=imageUrl;
  })
}
