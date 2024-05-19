/* 
The various standard materials progress from fastest to slowest

MeshBasicMaterial
MeshLambertMaterial
MeshPhongMaterial
MeshStandardMaterial
MeshPhysicalMaterial

The slower materials can make more realistic looking scenes 
but you might need to design your code to use the faster matrials 
on low powered on low powered or moblie mechines.

There are 3 materials that have special uses. ShadowMaterial is usde to get the data
created from shadows.

The MeshDepthMaterial renders the depth of each pixel where pixels at 
negative near of the camera are 0 and negative far a 1.
Certain spacial affects can use this data which we'll get into at another time.
*/