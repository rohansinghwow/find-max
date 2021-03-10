function findmax(nums){
    let max =0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]>max){
            max = nums[i];
        }
    }
    return max;
}

console.log(findmax([24,-3,74,98,53]));