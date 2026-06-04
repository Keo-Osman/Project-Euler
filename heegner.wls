g[x_] := Abs[f[x] - Round[f[x]]]
f[x_] := Cos[Pi * Sqrt[x]]

Print @ Min[
  g /@ 
  Select[Range[-1000, 1000], !IntegerQ[Sqrt[#]] &]
]