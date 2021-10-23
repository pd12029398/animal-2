function  startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/haEX_ZKfv/', modelReady);
    }
    function modelReady(){
    classifier.classify(gotResults);
    }
    function gotResults(error,results){
    if(error){
    console.error(error);
    
    }else
    console.log(results);
    random_number_r=Math.floor(Math.random() * 255)+1;
    random_number_g=Math.floor(Math.random() * 255)+1;
    random_number_b=Math.floor(Math.random() * 255)+1;
    document.getElementById("result_label").innerHTML='i can hear-'+ results[0].label;
    document.getElementById("result_confidence").innerHTML='accuracy-'+ (results[0].confidence * 100).toFixed(2)+"%";
    img1=document.getElementById('cat');
    img2=document.getElementById('dog');
    img3=document.getElementById('duck');
    if(results[0].label=="Clap"){
    img1.src='cat.gif';
    img2.src='dog.jpeg';
    img3.src='duck.jpeg';
    
    
    
    
    
    }else if(results[0].label=="Bell"){
        img1.src='cat.png';
        img2.src='dog.gif';
        img3.src='duck.png';
       
        
    
    
    }
    else if(results[0].label=="Snapping"){
        img1.src='cat.png';
        img2.src='dog.png';
        img3.src='duck.gif';
       
        
    
    
    }