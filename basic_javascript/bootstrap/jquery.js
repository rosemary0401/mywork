// $('.btn').on('click',function(){
  
  // const name=$('.input').val();
//   if(name===''){

//   }else{
//   alert(name);
//   }
// });


// Hint: hook input onchange event


$('.btn').on('click',function(event){
  const name=$('.input').val();
  if(name==""){

    
    alert('please type your name before submit');
    // return false;
  
  }else{
    alert(name);
    // return true;
  }
  
});

$('p').css('color','green');