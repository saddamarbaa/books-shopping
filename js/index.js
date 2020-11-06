// style for canvas with id cav1
var mycanvas = document.getElementById('cav1');
mycontext = mycanvas.getContext('2d');
mycontext.fillStyle = '#080';
mycontext.fillRect(10,10,100,50);
mycontext.fillStyle = '#f00';
mycontext.fillRect(20,20,100,50);
mycontext.fillStyle = '#00f';
mycontext.fillRect(30,30,100,50);
mycontext.strokeStyle = '#ff0'
mycontext.lineWidth = 6
mycontext.strokeRect(100, 100, 100, 50)


// style for canvas with id cav2
var mycanvas = document.getElementById('cav2');
mycontext = mycanvas.getContext('2d');
mycontext.fillStyle = '#080';
mycontext.fillRect(10,10,100,50);
mycontext.fillStyle = '#f00';
mycontext.fillRect(40,40,100,50);
mycontext.fillStyle = '#00f';
mycontext.fillRect(50,50,100,50);
// bodere 6
mycontext.lineWidth = 6
mycontext.strokeStyle = '#ff0'
mycontext.strokeRect(100, 100, 100, 50)


// style for canvas with id cav3
var mycanvas = document.getElementById('cav3');
mycontext = mycanvas.getContext('2d');
mycontext.fillStyle = '#080';
mycontext.fillRect(0,0,300,250);
mycontext.strokeRect(100, 100, 100, 50)
mycontext.clearRect(100, 100, 100, 50)


// style for canvas with id cav4
/* 
    Define a starting point in position (0,0), 
    and an ending point in position (510,260). 
    Then use the stroke() method to actually draw the line: */
var mycanvas = document.getElementById('cav4');
mycontext = mycanvas.getContext('2d');
mycontext.fillStyle = '#f0f'; // file color
mycontext.fillRect(0,0,300,250); // Rectangle filed inside canvas
// blow to draw line
mycontext.strokeStyle = '#080';
mycontext.lineWidth = '5';
mycontext.moveTo(0,0); //start from
mycontext.lineTo(510,260); //go to
mycontext.stroke(); //start drawing line


// style for canvas with id cav5
// style for canvas with id cav5
// write simple text
var mycanvas = document.getElementById('cav5');
mycontext = mycanvas.getContext('2d');
mycontext.font ='30px  Arial'; // font size
mycontext.fillStyle = '#f0f'; // file color
mycontext.fillText('W',10,35);
mycontext.fillStyle = '#00f';
mycontext.fillText('l',40,55);
mycontext.fillStyle = '#0f0';
mycontext.fillText('c',60,75);
mycontext.fillStyle = '#080';
mycontext.fillText('o',80,95);
mycontext.fillStyle = '#ff0';
mycontext.fillText('m',100,115);
mycontext.fillStyle = '#f00';
mycontext.fillText('e',120,145);



// style for canvas with id cav7
// write simple text
var mycanvas = document.getElementById('cav7');
mycontext = mycanvas.getContext('2d');
mycontext.font ='30px  Arial'; // font size
mycontext.fillStyle = '#f00'; // file color
mycontext.fillText('H',15,35);
mycontext.fillStyle = '#00f';
mycontext.fillText('e',35,55);
mycontext.fillStyle = '#0f0';
mycontext.fillText('l',55,75);
mycontext.fillStyle = '#080';
mycontext.fillText('l',75,95);
mycontext.fillStyle = '#ff0';
mycontext.fillText('o',95,115);
mycontext.fillStyle= 'blue'
mycontext.strokeStyle='blue'
mycontext.strokeText('Welcome!',130,130);
