class Convert {
    constructor(num) {
        
        numberToText = (num) => {
            //вызов идет от большего числа к меньшему, удаляя считанное число тоесть: 154 читает 100 потом 50 потом 4 
            if (!num || num === 0) {
                throw new Error('Введите число больше нуля');
            }
        
            let arrFrom0to10 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
            let arrFrom11to20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
            let arrFrom21to99 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
            let str000 = ['hundred', 'thousand'];
            let text = '';
        
            this.search(num);
        
            search = (num) => {  
                num = `${num}`;
                if (num != 0){
                    switch (num.length) {
                        case 1:
                            this.from0to10(num);
            
                            break;
                        case 2:
                            this.from11to99(num);
                        
                            break;
                        case 3:
                            this.hundred(num);
            
                            break;
                        case 4:
                            this.thousand(num);
            
                            break;                 
                        default:
                            break;
                    }
                }
            }  
              
            from0to10 = (num) => {
        
                text += arrFrom0to10[+num - 1];
            }
        
            from11to99 = (num) => {
                let firstNumber = (Math.trunc((+num)/10));
                let secondNumber = ((+num)%10);
                //let text;
        
                if (+num < 20) {
                    text += arrFrom11to20[(secondNumber)]; 
                } else {                 //если число больше 20 считать начало + вызов функции серч со 2 цифрой 
                    text += arrFrom21to99[firstNumber-2] + ' ';
        
                    this.search(secondNumber);
                }    
            }
        
            hundred = (num) => {
                let first = +num[0];
                text += arrFrom0to10[first - 1] + ' ' + str000[0] + ' ';
        
                 //первые 
        
                this.search(num % 100); //идет вызывать ост часть
            }
        
            thousand = (num) => {
                let first = +num[0];
                text += arrFrom0to10[first - 1] + ' ' + str000[1] + ' ' ;
        
                 //первые 
        
                this.search(num % 1000); //идет вызывать ост часть
            }
        
            return text;
        }
    }

     

    // textToNumber = (text) => {
    //     //вызов идет от большего числа к меньшему, удаляя считанное число тоесть: 154 читает 100 потом 50 потом 4 
    //     if (!num || num === 0) {
    //         throw new Error('Введите число больше нуля');
    //     }
    
    //     let arrFrom0to10 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    //     let arrFrom11to20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    //     let arrFrom21to99 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    //     let str000 = ['hundred', 'thousand'];
    //     let text = '';
    
    //     search(num);
    
    //     search = (num) => {  
    //         num = `${num}`;
    //         if (num != 0){
    //             switch (num.length) {
    //                 case 1:
    //                     from0to10(num);
        
    //                     break;
    //                 case 2:
    //                     from11to99(num);
                    
    //                     break;
    //                 case 3:
    //                     hundred(num);
        
    //                     break;
    //                 case 4:
    //                     thousand(num);
        
    //                     break;                 
    //                 default:
    //                     break;
    //             }
    //         }
    //     }  
          
    //     from0to10 = (num) => {
    
    //         text += arrFrom0to10[+num - 1];
    //     }
    
    //     from11to99 = (num) => {
    //         let firstNumber = (Math.trunc((+num)/10));
    //         let secondNumber = ((+num)%10);
    //         //let text;
    
    //         if (+num < 20) {
    //             text += arrFrom11to20[(secondNumber)]; 
    //         } else {                 //если число больше 20 считать начало + вызов функции серч со 2 цифрой 
    //             text += arrFrom21to99[firstNumber-2] + ' ';
    
    //             search(secondNumber);
    //         }    
    //     }
    
    //     hundred = (num) => {
    //         let first = +num[0];
    //         text += arrFrom0to10[first - 1] + ' ' + str000[0] + ' ';
    
    //          //первые 
    
    //         search(num % 100); //идет вызывать ост часть
    //     }
    
    //     thousand = (num) => {
    //         let first = +num[0];
    //         text += arrFrom0to10[first - 1] + ' ' + str000[1] + ' ' ;
    
    //          //первые 
    
    //         search(num % 1000); //идет вызывать ост часть
    //     }
    
    
    //     return text;
    // }
}
export default Convert; 