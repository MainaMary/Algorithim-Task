  
    
  function convertFahrToCelsius(number){
      if(typeof number == 'number'){
        
        let c = (number - 32) * 5/9;
        let output = c.toFixed(4)
        console.log(output)
      } else if (typeof number == 'string'){
        let text ='deg c'
        let convert = parseInt(number, 10)
        let value = (convert - 32) * 5/9;

        console.log(`${value.toFixed(4)} ${text}`)

      }else if(typeof number == 'array'){
          
          console.log('array')
          console.log(`${number} not a valid number but an array`)
      }else{
          console.log(`${number} not a valid number but an object`)
      }
  
  }
  const number = [1,2,3]
  convertFahrToCelsius(number)
