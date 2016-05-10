// FizzBuzz: print Fizz if divisible by 3; Buzz if divisible by 5;
// FizzbBuzz if divisibile by 3 + 5; otherwise print the #
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}