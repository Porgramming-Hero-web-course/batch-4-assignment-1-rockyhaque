function removeDuplicates(numsArr: number[]): number[]{
    return [...new Set(numsArr)]
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 4]))
