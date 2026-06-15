f[n_] := 1 - n + n^2 - n^3 + n^4 - n^5 + n^6 - n^7 + n^8 - n^9 + n^10
(* f[n_] := n^3 *)

degree = 10
data = f /@ Range[1, degree + 1]



res = 
Total @ Table[
  First @ Complement[
    Table[
      InterpolatingPolynomial[f /@ Range[1,n], x] /. x -> i, 
      {i, 1, degree + 1}
    ],
    data
  ],
  {n, 2, degree}
]

Print[res + f[1]]