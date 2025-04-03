function removeDuplicates(nums: number[]): number {
  const frequencyMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = frequencyMap[nums[i]] !== undefined ? frequencyMap[nums[i]] + 1 : 1;
  }

  let writer = 0;

  for (let reader = 0; reader < nums.length; reader++) {
    if (frequencyMap[nums[reader]] >= 1) {
      nums[writer] = nums[reader];
      writer += 1;
      frequencyMap[nums[reader]] -= 1;
      reader += frequencyMap[nums[reader]];
    }
  }

  return writer;
}
