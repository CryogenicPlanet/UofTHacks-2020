import numpy as np
import os
f = open("bottlenecks.txt", "r")
temp = f.readlines()
bottlenecks =  temp
#print(bottlenecks)
f = open("files.txt", "r")
temp = f.readlines()
files = temp
for item in bottlenecks:
    item = item.strip('\n')
    #os.system("mkdir /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/data/{}".format(item))
    os.system("cp -r /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/img_highres/{} /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/data/".format(item))

#print(files)
#clothings = ['Jacket','Sweater','Top','Pant','Shorts','Dress','Skirt','Tee']
#for cloth in clothings[1:2]:
    #subset = []
    #for item in files:
      #  if cloth in item:
        #    os.system("cp -n /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/img_highres/{} /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/data/{}/".format(item.strip() + '/*',cloth))
#unclass = np.array([np.setdiff1d(files,bottlenecks)][0][0].split())
#print(unclass.size)
#baseroot = np.array(["/home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/cat_atr_pred_extra/"])
#for item in np.nditer(unclass):
    #os.system("sudo rm -r /home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/cat_atr_pred_extra/{}/".format(item))

