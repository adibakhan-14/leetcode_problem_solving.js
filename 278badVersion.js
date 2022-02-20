var solution = function(isBadVersion) {
        return function(n) {
            var low = 0
            var high = n-1
            while(low<=high){
                let mid = low + Math.floor((high-low)/2);
                
                if(isBadVersion(mid)){
                    high = mid-1; 
                } else{
                    low=mid+1
                } 
            }
            return low;
        };
    }