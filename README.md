# Clothology | [UofTHack2020](https://devpost.com/software/clothology)

##Inspiration

Toronto's temperature is extremely sporadic and as such, can sometimes get confusing when choosing clothes to wear. Sometimes its too hot for a thick jacket and too cold for a hoodie. We wanted to address this problem.

##What it does

Through our mobile app, users are notified of what other people in their area are wearing by analyzing publicly available live-camera footage from CCTV cameras and other sources. This greatly helps users in choosing the right attire for the unpredictable outdoor weather.

##How We built it

Our cross-platform app is built with a React Native frontend and powered by a Flask backend. We also utilize extensive image detection and recognition through our implementation of OpenCv and Inception V3 to detect and classify clothing from video feeds.

##Challenges We ran into

Clothing is extremely similar in nature and thus, it is extremely challenging to distinguish between them. This is extenuated by the fact that there are very few clothing classification datasets to train on, leading to a class imbalance problem while training data. Furthermore, there were problems with collaborative editing while training models which could not be committed to git.

##Accomplishments that We're proud of

We are proud of putting together an idea in such a short period of time and achieving our main goals for the application in the time frame.

##What We've learned

This experience was a great opportunity to further our teamwork skills and the ability to deliver solutions in fast-paced work environments.

##What's next for Clothology

We will be working on this solution more in our freetime, and are looking to deploy our app by the end of Q2.

