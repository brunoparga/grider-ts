export const quickSort = (list: number[]): number[] => {
  if (list.length < 2) { return list; }

  const smaller = list.slice(1).filter((element) => element < list[0])
  const equal = list.filter((element) => element === list[0])
  const larger = list.slice(1).filter((element) => element > list[0])

  // const [smaller, equal, larger] = list.reduce((lists: number[][], elt) => {
  //   if (elt < list[0]) {
  //     return [[...lists[0], elt], lists[1], lists[2]]
  //   } else if (elt === list[0]) {
  //     return [lists[0], [...lists[1], elt], lists[2]]
  //   } else {
  //     return [lists[0], lists[1], [...lists[2], elt]]
  //   }
  // }, [[], [], []])

  return quickSort(smaller).concat(equal).concat(quickSort(larger))
}

const numbers = [881, 136, 404, 52, 8, 81, 95, 76, 20, 98, 69, 37, 48, 5, 86, 61, 91, 37, 61, 24, 57, 3, 90, 16, 12, 63, 40, 26, 98, 56, 59, 92, 44, 24, 27, 21, 78, 88, 94, 7, 67, 46, 29, 54, 71, 80, 54, 37, 99, 92, 5, 99, 18, 30, 6, 95, 23, 10, 29, 57, 48, 63, 14, 97, 9, 95, 39, 16, 7, 71, 12, 2, 44, 3, 31, 70, 10, 44, 24, 17, 45, 75, 48, 61, 26, 82, 40, 37, 42, 72, 71, 91, 38, 39, 14, 13, 24, 18, 46, 224]

console.log(quickSort(numbers))