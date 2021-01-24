//https://www.algoexpert.io/questions/Task%20Assignment
//0(nlog(n)) | o(n)
function taskAssignment(k, tasks) {
  const res = [];
  const taskIndex = getDurationIndex(tasks);
  const sortedTasks = [...tasks].sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    const task1 = sortedTasks[i];
    const indicesWithTask1 = taskIndex[task1];
    const task1Index = indicesWithTask1.pop();

    const task2 = sortedTasks[tasks.length - 1 - i];
    const indicesWithTask2 = taskIndex[task2];
    const task2Index = indicesWithTask2.pop();
    res.push([task1Index, task2Index]);
  }
  return res;
}

function getDurationIndex(tasks) {
  const taskIndex = {};

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task in taskIndex) {
      taskIndex[task].push(i);
    } else {
      taskIndex[task] = [i];
    }
  }
  return taskIndex;
}
