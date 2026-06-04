Print[
  Total[
    Total /@
      (RealDigits[N[Sqrt[#], 110], 10, 100][[1]] & /@
        Select[Range[100], ! IntegerQ[Sqrt[#]] &])
  ]
]