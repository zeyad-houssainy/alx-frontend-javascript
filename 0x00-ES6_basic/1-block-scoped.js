export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // eslint-disable-line no-unused-vars
    task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
