* @param {character[]} tasks
* @param {number} n
* @return {number}
*/
var leastInterval = function(tasks, n) {
   if(!tasks.length) {
       return 0;
   }
   // if no cooling period is needed, CPU can execute all tasks sequentially 
   // with no breaks. 
   if(0 >= n) {
       return tasks.length;
   }
   
   // store the frequency of each task 't'
   const taskFreq = {}
   for(let t of tasks) {
       taskFreq[t] = taskFreq[t] || 0;
       taskFreq[t]++;
   }
   
   // sort the task frequencies (values from above map) 
   const frequencies = Object.values(taskFreq);
   frequencies.sort((a, b) => a - b);

   let length = frequencies.length;
   let maxFreq = frequencies[length - 1]; // Find max. frequency value
   let maxIdleTime = (maxFreq - 1) * n; // max idle time
   
   // Find Min. idle time by filling idle slots with other tasks
   // At each step, reduce idle time by frequency of next task being taken up
   for(let i = length - 2; i >= 0 && maxIdleTime > 0; i--) {
       maxIdleTime = maxIdleTime - Math.min(maxFreq - 1, frequencies[i]);
   }
   
   // check if idle time is not negative (case when frequency of all tasks are same)
   maxIdleTime = Math.max(0, maxIdleTime);
   
   // total CPU time will be: 
   // a) total time taken for all tasks = tasks.length +
   // b) minimum idle time after filling other tasks into max available idle slots
   return tasks.length + maxIdleTime;
};