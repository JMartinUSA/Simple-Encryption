var key;
var input;
var inputLength;
var symbol = [' ', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '!', '1', '@', '2', '#', '3', '$', '4', '%', '5', '^', '6', '&', '7', '*', '8', '(', '9', ')', '0', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', "'", '<', ',', '>', '.', '?', '/'];
  

    function field(){
    	input = document.getElementById("inputTextToBeEncrypted").value;
        inputLength = input.length;
        key = document.getElementById("key").value;
		document.getElementById("output").innerHTML="";
		if(key != ""){
		    while (key.length < input.length){
				key = key+key
			}
		}
		/*if(keyDecrypt != ""){		
			while (keyDecrypt.length < input.length){
				keyDecrypt = keyDecrypt+keyDecrypt
			}						
		}*/
    }

	function Encrypt(){
		var i = 0;
	    var j = 0;
	    var k = 0;

	    //This fires once for every digit in the mainInput field
		while(i <= inputLength){
			j = 0;
			//This fires once for every possible character in the key field 
			while(j < 92){
				k = 0;
				if (key.substring(i,i+1) == symbol[j]){				
					var jFinal = j;	
					//This fires once for every 			
					while(k < 92){										
						if(input.substring(i,i+1) == symbol[k]){						
							var kFinal = k;						
							var output = kFinal + jFinal;						
							if(output > 91){output=output-92}
							var symboloutput = symbol[output];
							//console.log(symboloutput);
							document.getElementById("output").innerHTML+=symboloutput;						
							k = 92;				
						}else{					
							k = k+1;					
						}				
				    }
			    	j = 92;			
			    	}else{
					j=j+1;			
				}
			}
			
	    	i= i+1;
		} 

	}

		function Decrypt(){
		var i = 0;
	    var j = 0;
	    var k = 0;

	    //This fires once for every digit in the mainInput field
		while(i <= inputLength){
			j = 0;
			//This fires once for every possible character in the key field 
			while(j < 92){
				k = 0;
				if (key.substring(i,i+1) == symbol[j]){				
					var jFinal = j;	
					//This fires once for every 			
					while(k < 92){										
						if(input.substring(i,i+1) == symbol[k]){						
							var kFinal = k;						
							var output = kFinal - jFinal;						
							if(output < 0){output=output+92}
							var symboloutput = symbol[output];
							console.log(symboloutput);
							document.getElementById("output").innerHTML+=symboloutput;						
							k = 92;				
						}else{					
							k = k+1;					
						}				
				    }
			    	j = 92;			
			    	}else{
					j=j+1;			
				}
			}
			
	    	i= i+1;
		} 

	}