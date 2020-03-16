/* 
    Takes an array of arrays (2 numbers each, representing start and end times of a class) and returns how many classrooms are needed. 

    Naive solution is O(n log n) due to the break.
*/

const START = 0;
const END = 1;

/**
 * @param {number[]} arr
 * @returns {number}
 */
function classRooms(arr) {
  let count = 1;
  // VALIDATION
  if (!Array.isArray(arr) || !arr.length) throw new TypeError("not an array");

  // SORT ARRAY BY START TIME
  arr.sort((a, b) => {
    if (a[START] > b[START]) return -1;
    else return 1;
  });

  // start with 1 room
  const rooms = [[]];

  // LOOP OVER EACH INPUT CLASS TIME
  for (let i = 0; i < arr.length; ++i) {
    let addClassToRoom = 0;
    let newRoom = false;

    // LOOP OVER EXISTING ROOMS
    for (let j = 0; j < rooms.length; ++j) {
      // check against times in a room
      let roomConflict = false;
      //
      addClassToRoom = j;

      // LOOP OVER EXISTING ROOM CLASS TIMES
      for (let k = 0; k < rooms[j].length; ++k) {
        count++;
        // if overlaps with existing time, can't use this room
        // check (1) start time is within a class (2) end time is within a class (3) start is before class and end is after class
        if (
          (arr[i][START] >= rooms[j][k][START] &&
            arr[i][START] <= rooms[j][k][END]) ||
          (arr[i][END] >= rooms[j][k][START] &&
            arr[i][END] <= rooms[j][k][END]) ||
          (arr[i][START] <= rooms[j][k][START] &&
            arr[i][END] >= rooms[j][k][END])
        ) {
          roomConflict = true;
        }
      }
      if (!roomConflict) {
        break;
      } else if (j === rooms.length - 1) {
        newRoom = true;
      }
    }

    // push class to appropriate room
    if (newRoom) {
      rooms.push([arr[i]]);
    } else {
      rooms[addClassToRoom].push(arr[i]);
    }
  }
  return rooms.length;
}

exports.classRooms = classRooms;
