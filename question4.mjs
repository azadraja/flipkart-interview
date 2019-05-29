export function findMaxSubArray(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            let maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    if(max_so_far === Number.NEGATIVE_INFINITY) {
      max_so_far = 0;
    }
    return {
        maxsumarray: arr.slice(leftIndex, rightIndex+1),
        final_max_sum_subArray: max_so_far
    };
}