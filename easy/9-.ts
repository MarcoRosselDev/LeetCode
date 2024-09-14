const isPalindromee = (x:number|string): boolean => {
  return x.toString().toLowerCase().split("").reverse().join("") === x.toString().toLowerCase()? true: false;
};

isPalindromee(121)
isPalindromee(-121)