sevenOfNine:: [Int]
sevenOfNine = [x | x <- [1..], mod x 7 == 0 || mod x 9 == 0]
