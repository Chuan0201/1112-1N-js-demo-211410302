const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch(week){
   case 'w1':
     showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%"height="100%"/>`;
     break;
   case 'w1-md':
     showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_02.pdf' width="100%"height="100%"/>`;
     break;
   case 'w2':
     showDemo.innerHTML = `<iframe src='./demo/w02/tictactoe_02.html' width="100%"height="100%"/>`;
     break;
   case 'w2-md':
     showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_02.pdf' width="100%"height="100%"/>`;
     break;
   case 'w3':
       showDemo.innerHTML = `<iframe src='./demo/w03/reviews_starter_02/index.html' width="100%"height="100%"/>`;
       break;
   case 'w3-md':
       showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_02.pdf' width="100%"height="100%"/>`;
       break;
   case 'w4':
         showDemo.innerHTML = `<iframe src='./demo/w04/menu_starter_02/index.html' width="100%"height="100%"/>`;
         break;
   case 'w4-md':
         showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_02.pdf' width="100%"height="100%"/>`;
         break;
   case 'w5':
     showDemo.innerHTML = `<iframe src='./demo/w05/index.html' width="100%"height="100%"/>`;
     break;
   case 'w5-md':
     showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_02.pdf' width="100%"height="100%"/>`;
     break;
   case 'w5-modal':
       showDemo.innerHTML = `<iframe src='./demo/w05-modal-starter/index.html' width="100%"height="100%"/>`;
       break;
   case 'w5-modal-md':
       showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_02.pdf' width="100%"height="100%"/>`;
       break;
   case 'w6':
     showDemo.innerHTML = `<iframe src='./demo/w06-array/p1_02/p1_02.html' width="100%"height="100%"/>`;
     break;
   case 'w6-md':
     showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_02.pdf' width="100%"height="100%"/>`;
     break;
   case 'w7':
     showDemo.innerHTML = `<iframe src='./demo/w09/p1_bmi_02/p1_02.html' width="100%"height="100%"/>`;
     break;
   case 'w7-md':
     showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_02.pdf' width="100%"height="100%"/>`;
     break;
   case 'w7':
       showDemo.innerHTML =`<iframe src='./demo/w09/p2_counter_02/index.html' width="100%"height="100%"/>`;
       break;
   case 'w7-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_02.pdf' width="100%"height="100%"/>`;
       break;
   case 'w7':
         showDemo.innerHTML = `<iframe src='./demo/w09/p3_tour_02/index.html' width="100%"height="100%"/>`;
         break;
   case 'w7-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_02.pdf' width="100%"height="100%"/>`;
         break;
  }

}
