/**
 * from the medium article, asking do you know what is being
 * done here?
 *
 * A the const getUid is set to an int and immediately incremented by 1
 * It's called a second time and is again incremented
 */
const getUid = (() => {
  let uid = 0;
  return () => ++uid;
})();

console.log(getUid());
console.log(getUid());
