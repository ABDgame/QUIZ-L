const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"imagens/letraL",
               structure:[
                           {question:"LO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LA",options:['LANCHE.jpg','LIVRO.jpg','LANTERNA.jpg','LUVA.jpg'],key:0},
                     
                           {question:"LE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                           
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},


                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg' ,'LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUSTRE.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVA.jpg'],key:0},


                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},


                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVRO.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg' ,'LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVRO.jpg','LIMAO.jpg'],key:0},


                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVA.jpg','LEITÃO.jpg'],key:3},

                           {question:"LE",options:['LIVRO.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},


                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg', 'LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg', 'LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},


                           {question:"LI",options:['LUA.jpg','LIVRO.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LOBO",options: ['LUPA.jpg', 'LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},


                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVA.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg' ,'LAGARTIXA.jpg'],key:2},


                           {question:"LO",options:['LABIRINTO.jpg','LUVA.jpg','LIMPEZA.jpg', 'LOBISOMEM.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},


                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVA.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg' ,'LEITE.jpg','LIXO.jpg', 'LENTO.jpg'],key:0},


                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUSTRE.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUSTRE.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
     
        { 
               type:" PALAVRAS ",
               msg:" ",
               path:"imagens/letraL",
               structure:[
                           {question:"LOCOMOTIVA",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LANCHE",options:['LANCHE.jpg','LIVRO.jpg','LANTERNA.jpg','LAREIRA.jpg'],key:0},
                     
                           {question:"LEÃO",options:['LIMAO.jpg','LEITE.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                           
                           {question:"LAMPADA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LAGOA.jpg','LAMPADA.jpg'],key:3},


                           {question:"LANTERNA",options:['LAGARTIXA.jpg','LIMPEZA.jpg','LOUSA.jpg' ,'LANTERNA.jpg'],key:3},

                           {question:"LAREIRA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LARANJA",options:['LANCHE.jpg' ,'LARANJA.jpg','LIXO.jpg','LUSTRE.jpg'],key:1},
                           
                           {question:"LAGOSTA",options:['LAGOSTA.jpg','LUTADOR.jpg','LANTERNA.jpg','LUVA.jpg'],key:0},


                           {question:"LAGO",options:['LEITE.jpg','LABIRINT.jpg','LAPIS.jpg','LAGOA.jpg'],key:3},
                           
                           {question:"LASANHA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁPIS",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LIMPEZA",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},


                           {question:"LAGARTIXA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVRO.jpg','LEITURA.jpg'],key:1},

                           {question:"LEITE",options:['LEGO.jpg','LEOPARDO.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LEOPARDO",options:['LABIOS.jpg','LEGUMES.jpg','LEQUE.jpg' ,'LEOPARDO.jpg',],key:3},

                           {question:"LEQUE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVRO.jpg','LEAO.jpg'],key:0},


                           {question:"LEOA",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LENHA",options:['LENHA.jpg','LEITE.jpg','LENHA.jpg','LEAO.jpg'],key:0},

                           {question:"LEITÃO",options:['LOBO.jpg','LONTRA.jpg','LUVA.jpg','LEITÃO.jpg'],key:3},

                           {question:"LESMA",options:['LIVRO.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},


                           {question:"LUNETA",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg', 'LAPIS.jpg'],key:2},                     

                           {question:"LIXEIRA",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg', 'LIQUIDIFICADOR.jpg'],key:1},

                           {question:"LIMONADA",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LIXO.jpg'],key:0},

                           {question:"LIQUIDIFICADOR",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},


                           {question:"LIVRO",options:['LUA.jpg','LIVRO.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LINGUA",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LOUSA",options:['LOUSA.jpg','LONTRA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LOBO",options: ['LUPA.jpg', 'LOUSA.jpg','LEAO.jpg','LOBO.jpg'],key:3},


                           {question:"LIMOSINE",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LONTRA",options:['LOUCA.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LOUÇA",options:['LIMAO.jpg','LUPA.jpg','LUVA.jpg','LOUCA.jpg'],key:3},

                           {question:"LOJA",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg' ,'LAGARTIXA.jpg'],key:2},


                           {question:"LOBISOMEM",options:['LABIRINTO.jpg','LARANJA.jpg','LIMPEZA.jpg', 'LOBISOMEM.jpg'],key:3},

                           {question:"LUA",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LUNETA",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LUTA",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},


                           {question:"LUVA",options:['LENCO.jpg','LOBO.jpg','LUVA.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LAVANDERIA",options:['LAVANDERIA.jpg' ,'LEITE.jpg','LIXO.jpg', 'LENTO.jpg'],key:0},

                           {question:"LULA",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LOCOMOTIVA",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUSTRE.jpg'],key:1},

                           {question:"LUSTRE",options:['LARANJA.jpg','LUSTRE.jpg','LIMPEZA.jpg','LUMINARIA.jpg'],key:0}

                              

                        ]
              }

    ] 


// create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            

              }
               
             
           //Confetti começa aqui
             var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};
             !function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};
             var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;
             function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;
             (!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;
             for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;
             t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};
             var m=document.getElementById("confetti-canvas");
             null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));
             var s=confetti.maxCount;
             if(n)if(o)if(n==o)s=a.length+o;
             else{if(n>o){var f=n;
             n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;
             else o&&(s=a.length+o);
             for(;a.length<s;)a.push(d({},r,u));
             e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();
              
       
       
// custom js        
  const startit = () => {
   setTimeout(function() {
    confetti.start();
   },1000);
  };
 // Stops
   const stopit = () => {
       setTimeout(function(){
         confetti.stop();
       }, 5000);
     };
     //playing start
     startit();
     //stoping it
     stopit();
              
       
           
       }


      //28-06-2021 - 2 Tentativa - SUMIU TUDO
      
 
     }
    // add 28 - 06 - 2021 - APARECEU DESTE A PRIMEIRA PÁGINA
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     

   
   
 
