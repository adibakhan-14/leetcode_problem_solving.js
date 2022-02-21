var moveZeroes = function (nums) {
        let count = 0;
        
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) {
            nums[count++] = nums[i];
          
          }
        }
      
        for (let i = count; i < nums.length; i++) {
          nums[i] = 0;
        }
        
        return nums;
      };

      let arr=[0,1,4,6,0,10];
      console.log(moveZeroes(arr));