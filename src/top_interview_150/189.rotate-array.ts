function rotate(nums: number[], k: number): void {
  const numsCopy = [...nums];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = numsCopy[Math.abs((i + nums.length - (k % nums.length))) % nums.length];
  }
};
