f[n_] := DivisorSigma[1,n] - n
data = f /@ Range[0, 1000000]

Export["divisors.txt", StringRiffle[ToString /@ data, ","], "Text"]