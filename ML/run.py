import os
mainDir = "/home/rahultarak12345/UofTHacks-2020"
for i in range(1,10):
	os.system("python3 {}/ML/retrain.py --bottleneck_dir={}/ML/bottlenecks --how_many_training_steps 100000  --model_dir={}/ML/inception --output_graph={}/ML/retrained_graph.pb --output_labels={}/ML/retrained_labels.txt --image_dir={}/ML/dataset/tf_files/cat_atr_pred_extra".format(mainDir,mainDir,mainDir,mainDir,mainDir))
