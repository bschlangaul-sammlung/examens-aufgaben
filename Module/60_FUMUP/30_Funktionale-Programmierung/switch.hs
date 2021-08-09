sub2 x = x-2
f1 x = x
f2 x = x*x
f3 x = x*x*x
f4 x = x*x*x*x

switch:: (a-> Int) -> [(a->a)] -> a -> a
switch s ys x = if (s x) < 0 || (s x) >= length ys then x else (ys !! (s x)) x