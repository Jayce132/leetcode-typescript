function majorityElement(nums: number[]): number {
  const frequencyMap: { [key: number]: number } = {};
  const times = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = frequencyMap[nums[i]] ? frequencyMap[nums[i]] + 1 : 1;

    if (frequencyMap[nums[i]] > times) {
      return nums[i];
    }
  }

  return -1;
};
