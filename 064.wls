Print @ First @ AbsoluteTiming[
  Print @ Count[
    Length[Last[ContinuedFraction[Sqrt[#]]]] & /@
      Select[Range[2, 10000], ! IntegerQ[Sqrt[#]] &],
    _?OddQ
  ]
]

