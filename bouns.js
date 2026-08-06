var findKthPositive = function(arr, k) {
   let missing=0;
   let num=1;
   let i=0;
    while (missing <k){
        if(arr[i]==num){
            i++;
            num++
        }
        else{
            missing++
            num++
        }
    }
    return num - 1;
};