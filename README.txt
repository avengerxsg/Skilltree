Documentation

Author: Di'el aka dakaringer
Project: BnS Tree

Skill Tree Simulator for Blade & Soul

This is a skill tree simulator for all classes of Blade & Soul. This was done possible by reading the source markup of the official Blade & Soul korean website.
This project is hosted on Github Pages with a custom domain (bnstree.com)


Disclaimer:

The following files (used for the skill tree itself) is made by ncsoft. 
Most of these were heavily modified by me for translation, fixing bugs and optimizing webpage + user experience.

data_skill-tooltip.js (split into separate files for each class)
data_skill-tooltip-attribute.js
training.min.js
training2.css
common.js (only used the functions relating to JSON)
category_data_XX.js
slot_data_XX.js
skill_data_XX.js

Background images are taken by me or found on the bns kr screenshot forum.
Skill images are directly from the bns kr website.


This project was remade on the Bootstrap framework for responsive design.
Big credits to Jasny (https://github.com/jasny/bootstrap) for the Bootstrap extension and starting template.


If you are going to use, modify and/or host this project yourself, please give credit to where it belongs.




How it works:

Skill Tree
Most of the functions for the skill tree is defined in training.min.js. Modify this if you want to change its behavior.
The skills themselves are defined in each class folders. Modify skill_data to edit the tooltips (most of the translations); modify category_data to edit the list on the left; modify slot_data to edit the tree.
data_skill-tooltip-attribute and data_skill-tooltip defines the behavior of displaying changes between talents on the tooltips. builds.js have preset builds saved.

Other functions of the website are defined in extra.js

For styling, training2.css defines the style of the tree and everything else is defined in layout.css (with the exception of some Bootstrap elements)




AS = assassin
BM = blade master
DE = destroyer
FM = force master
KF = kung-fu master
SM = lyn blade master
SU = summoner
WL = warlock