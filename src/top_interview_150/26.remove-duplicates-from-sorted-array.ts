function removeDuplicates(nums: number[]): number {
  // We can skip checking the first number
  let current = nums[0];
  let writer = 1;

  for (let reader = 1; reader < nums.length; reader++) {
    if (current !== nums[reader]) {
      nums[writer] = nums[reader];
      writer += 1;
      current = nums[reader];
    }
  }

  return writer;
}
