function plusMinus(arr) {
    // Write your code here
    let totalI = 0;
    let posI = 0;
    let negI = 0;
    let oI = 0;
    for (let i=0; i < arr.length; i++) {
        if(arr[i]==0){
            totalI++;
            oI++;
        }else if(arr[i]>0){ 
            totalI++;
            posI++;
        }else{
            totalI++;
            negI++;
        }
    }
    console.log((posI / totalI).toFixed(6))
    console.log((negI / totalI).toFixed(6))
    console.log((oI / totalI).toFixed(6))
}