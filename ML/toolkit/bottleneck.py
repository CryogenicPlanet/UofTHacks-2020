import numpy as np

bottlenecks = np.opentxt('bottleneck.txt')
files = np.opentxt('files.txt')
unclass = np.setdiff1(bottlenecks,files)

print(unclass)
