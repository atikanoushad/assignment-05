

document.getElementById("heart-btn1").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})
document.getElementById("heart-btn2").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})
document.getElementById("heart-btn3").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})
document.getElementById("heart-btn4").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})
document.getElementById("heart-btn5").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})
document.getElementById("heart-btn6").addEventListener('click',function(e){
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("heart-count").innerText) ;
    const newHeart = availableHeart + 1 ;
    document.getElementById("heart-count").innerText = newHeart ;
    
    
})

// call

document.getElementById("call-btn1")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         document.getElementById("available-coin").innerText = newAvailableCoin;
    //   const serviceName =  document.getElementById("service-name1").innerText ;
    //   const serviceNum = document.getElementById("service-num").innerText ;
      alert("Service Name : National Emergency Number\n" +
        "Service Number : 999");
    })
document.getElementById("call-btn2")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
         document.getElementById("available-coin").innerText = newAvailableCoin;
    
      alert("Service Name : Police Helpline Number\n" +
        "Service Number : 999");
        if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
       
    })
document.getElementById("call-btn3")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         document.getElementById("available-coin").innerText = newAvailableCoin;
    //   const serviceName =  document.getElementById("service-name1").innerText ;
    //   const serviceNum = document.getElementById("service-num").innerText ;
      alert("Service Name : Fire Service Number\n" +
        "Service Number : 999");
        if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
    })
document.getElementById("call-btn4")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         document.getElementById("available-coin").innerText = newAvailableCoin;
    //   const serviceName =  document.getElementById("service-name1").innerText ;
    //   const serviceNum = document.getElementById("service-num").innerText ;
      alert("Service Name : Ambulance Service\n" +
        "Service Number : 1994-999999");
        if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
    })
document.getElementById("call-btn5")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         document.getElementById("available-coin").innerText = newAvailableCoin;
    //   const serviceName =  document.getElementById("service-name1").innerText ;
    //   const serviceNum = document.getElementById("service-num").innerText ;
      alert("Service Name :Women & Child Helpline\n" +
        "Service Number : 109");
    if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
    })
document.getElementById("call-btn6")
    .addEventListener("click",function(){
        const availableCoin = parseInt(document.getElementById("available-coin").innerText)
        const newAvailableCoin = availableCoin - 20 ;
         document.getElementById("available-coin").innerText = newAvailableCoin;
    //   const serviceName =  document.getElementById("service-name1").innerText ;
    //   const serviceNum = document.getElementById("service-num").innerText ;
      alert("Service Name :Anti-Corruption Helpline\n" +
        "Service Number : 106");
        if(newAvailableCoin <20 ){
            alert("Irrelevant")
            return;
        }
    })

    // copy

    document.getElementById("copy-btn1")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })
    document.getElementById("copy-btn2")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })
    document.getElementById("copy-btn3")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })
    document.getElementById("copy-btn4")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })
    document.getElementById("copy-btn5")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })
    document.getElementById("copy-btn6")
        .addEventListener("click",function(){
            const availableCopy = parseInt(document.getElementById("copy-count").innerText)
            const newCopy = availableCopy + 3 
            document.getElementById("copy-count").innerText = newCopy
        })

    // history
   const historyData = []
    document.getElementById("call-btn1")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "National Emergency Number\n " + "999" 
             
            const data = {
        name : "Add Money" ,
        date : new Date().toLocaleTimeString()
       
    }
     historyData.push(data)
        })
    document.getElementById("call-btn2")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "Police Helpline Number \n " + "999" 
        })
    document.getElementById("call-btn3")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "Fire Service Number\n " + "999" 
        })
    document.getElementById("call-btn4")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "Ambulance Service\n " + "1994-999999" 
        })
    document.getElementById("call-btn5")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "Women & Child Helpline \n " + "109" 
        })
    document.getElementById("call-btn6")
        .addEventListener("click",function(){
            document.getElementById("history-info").innerText = "Anti-Corruption Helpline\n " + "106" 
        })
