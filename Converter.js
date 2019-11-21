module.exports = {
	convertToBinary: function(number) {
        let binNum = "";
		while(number>=1) {
            binNum+=(number%2).toString(10);
            number=Math.floor(number/2);
			}
			binNum=binNum.split("").reverse().join("");
			return binNum;
        },
    convertToHexa: function(number) {
		let hexNum = "";
		while(number>=1) {
			if(number%16<10)
            	hexNum += number%16;
			else
				switch (number%16) {
					case 10:
					hexNum+="A";
					break;
					case 11:
					hexNum+="B";
					break;
					case 12:
					hexNum+="C";
					break;
					case 13:
					hexNum+="D";
					break;
					case 14:
					hexNum+="E";
					break;
					case 15:
					hexNum+="F";
					break;
					default:
					break;
				}
			number=Math.floor(number/16);	
			}
		hexNum=hexNum.split("").reverse().join("");
		return hexNum;
l	}
}