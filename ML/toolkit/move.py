import numpy as np 
import os
f = open("./data.dat")
data = f.readlines()
length = len(data)
N = 10
ran = np.random.randint(1,length,N)
for i in range(N):
    os.system("cp -r /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/data/{} /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/temp/".format(data[ran[i]].strip()))