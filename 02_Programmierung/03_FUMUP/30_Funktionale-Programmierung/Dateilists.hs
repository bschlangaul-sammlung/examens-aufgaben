myLength:: [a] -> Int
myLength [] = 0
myLength (x:xs) = 1+myLength(xs)

myconcat:: ([a],[a]) -> [a]
myconcat ([],ys) = ys
myconcat (xs,[]) = xs
myconcat ((x:xs),ys) = x : myconcat(xs,ys)

myappend:: ([Int],Int) -> [Int]
myappend ([],y) = [y]
myappend ((x:xs),y) = x:myappend(xs,y)

mySum:: [Int] -> Int
mySum [] = 0
mySum (x:xs) = x+mySum(xs)
