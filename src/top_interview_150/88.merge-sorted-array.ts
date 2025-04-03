/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let lastSecondIndex = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[i] === 0 && lastSecondIndex >= 0) {
      nums1[i] = nums2[lastSecondIndex];
      lastSecondIndex -= 1;
    } else {
      break;
    }
  }

  nums1.sort((a, b) => a - b);
}
