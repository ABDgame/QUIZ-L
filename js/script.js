const myApp=[  
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraL",
               structure:[
                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:3},

                           {question:"L",options:['L.jpg','L.jpg','L.jpg' ,'L.jpg'],key:2},

                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:0},
 
                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:1},
                     
                           {question:"L",options:['L.jpg' ,'L.jpg','L.jpg','L.jpg'],key:0}

                          ]
              },
     
        { 
               type:" PALAVRAS ",
               msg:" ",
               path:"images/letraL",
               structure:[
                           {question:"LOCOMOTIVA",options:['L.jpg','LOCOMOTIVA.jpg','L.jpg','L.jpg'],key:1},
                          
                           {question:"LANCHE",options:['LANCHE.jpg','L.jpg','L.jpg','L.jpg'],key:0},
                     
                           {question:"LEÃO",options:['L.jpg','L.jpg','LEAO.jpg','L.jpg'],key:2},
                           
                           {question:"LAMPADA",options:['L.jpg','L.jpg','L.jpg','LAMPADA.jpg'],key:3},


                           {question:"LANTERNA",options:['L.jpg','L.jpg','L.jpg' ,'LANTERNA.jpg'],key:3},

                           {question:"LAREIRA",options:['L.jpg','L.jpg','LAREIRA.jpg','L.jpg'],key:2},

                           {question:"LARANJA",options:['L.jpg' ,'LARANJA.jpg','L.jpg','L.jpg'],key:1},
                           
                           {question:"LAGOSTA",options:['LAGOSTA.jpg','L.jpg','L.jpg','L.jpg'],key:0},


                           {question:"LAGO",options:['L.jpg','L.jpg','L.jpg','LAGOA.jpg'],key:3},
                           
                           {question:"LASANHA",options:['L.jpg','LASANHA.jpg','L.jpg', 'L.jpg',],key:1},

                           {question:"LÁPIS",options:['LAPIS.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LIMPEZA",options:['L.jpg','L.jpg','LIMPEZA.jpg','L.jpg'],key:2},


                           {question:"LAGARTIXA",options:['L.jpg','LAGARTIXA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LEITE",options:['L.jpg','L.jpg','LEITE.jpg','L.jpg'],key:2},

                           {question:"LEOPARDO",options:['L.jpg','L.jpg','L.jpg' ,'LEOPARDO.jpg',],key:3},

                           {question:"LEQUE ",options:['LEQUE.jpg','L.jpg','L.jpg','L.jpg'],key:0},


                           {question:"LEOA",options:['L.jpg','L.jpg','LEOA.jpg','L.jpg',],key:2},

                           {question:"LENHA",options:['LENHA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LEITÃO",options:['L.jpg','L.jpg','L.jpg','LEITÃO.jpg'],key:3},

                           {question:"LESMA",options:['L.jpg','LESMA.jpg','L.jpg','L.jpg'],key:1},


                           {question:"LUNETA",  options:['L.jpg','L.jpg','LUNETA.jpg', 'L.jpg'],key:2},                     

                           {question:"LIXEIRA",options:['L.jpg','LIXEIRA.jpg','L.jpg', 'L.jpg'],key:1},

                           {question:"LIMONADA",options:['LIMONADA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LIQUIDIFICADOR",options:['L.jpg','L.jpg','L.jpg','LIQUIDIFICADOR.jpg'],key:3},


                           {question:"LIVRARIA",options:['L.jpg','LIVRARIA.jpg','L.jpg','L.jpg'],key:1},
                             
                           {question:"LINGUA",options:['L.jpg','L.jpg','LINGUA.jpg','L.jpg'],key:2},

                           {question:"LOUSA",options:['LOUSA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LOBO",options: ['L.jpg', 'L.jpg','L.jpg','LOBO.jpg'],key:3},


                           {question:"LIMOSINE",options:['LIMOSINE.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LONTRA",options:['L.jpg','LONTRA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LOUÇA",options:['L.jpg','L.jpg','L.jpg','LOUCA.jpg'],key:3},

                           {question:"LOJA",options:['L.jpg','L.jpg','LOJA.jpg' ,'L.jpg'],key:2},


                           {question:"LOBISOMEM",options:['L.jpg','L.jpg','L.jpg', 'LOBISOMEM.jpg'],key:3},

                           {question:"LUA",options:['L.jpg','L.jpg','LUA.jpg','L.jpg'],key:2},

                           {question:"LUNETA",options:['LUNETA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LUTA",options:['L.jpg','LUTA.jpg','L.jpg','L.jpg' ],key:1},


                           {question:"LUVA",options:['L.jpg','L.jpg','LUVA.jpg','L.jpg'],key:2},
                           
                           {question:"LAVANDERIA",options:['LAVANDERIA.jpg' ,'L.jpg','L.jpg', 'L.jpg'],key:0},

                           {question:"LULA",options:['L.jpg' ,'L.jpg','L.jpg', 'LULA.jpg'],key:3},

                           {question:"LOCOMOTIVA",options:['L.jpg','LOCOMOTIVA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LUSTRE",options:['L.jpg','LUSTRE.jpg','L.jpg','L.jpg'],key:0}

                              

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
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

