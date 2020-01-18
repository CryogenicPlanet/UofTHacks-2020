import os
mainDir = "/home/rahultarak12345/UofTHacks-2020"
for i in range(1,10):
	os.system("python3 /home/rahultarak12345/UofTHacks-2020/ML/retrain.py --bottleneck_dir=/home/rahultarak12345/UofTHacks-2020/ML/bottlenecks --how_many_training_steps 100000  --model_dir=/home/rahultarak12345/UofTHacks-2020/ML/inception --output_graph=/home/rahultarak12345/UofTHacks-2020/ML/retrained_graph.pb --output_labels=/home/rahultarak12345/UofTHacks-2020/ML/retrained_labels.txt --image_dir=/home/rahultarak12345/UofTHacks-2020/ML/dataset/tf_files/cat_atr_pred_extra")
