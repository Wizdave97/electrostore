
  export const  hasError=(element)=>{
    if(element.disabled || element.type === 'file' || element.type === 'reset' || element.type === 'submit' || element.type === 'button') return null
    let validity=element.validity
    if(validity.valid) return null
    if(validity.valueMissing) return 'Please fill in this field'
    if(element.type==='email'){
      if(validity.typeMismatch) return 'Please enter an email address'
    }
    if(validity.tooShort) return 'Password should be atleast 8 chracters long'
    if(validity.patternMismatch) {
      return 'Please enter a valid email address'}
    return null
  }

  export const  showError=(element,errorStatus)=>{
      element.classList.add('error')
      element.setAttribute('aria-describedby','errorMessagefor'+element.id)
      let message=document.getElementById('errorMessagefor'+element.id)
      if(message)  message.textContent=errorStatus
      if(!message){
        element.parentElement.insertAdjacentHTML('afterend',`<p class="errorText" id="errorMessagefor${element.id}">${errorStatus}</p>`)
      }
  }
  export const  removeError=(element)=>{
      element.classList.remove('error')
      element.removeAttribute('aria-describedby')
      let message=document.getElementById('errorMessagefor'+element.id)
      if(message) message.parentNode.removeChild(message)
  }
