//https://leetcode.com/problems/max-points-on-a-line/solution/

// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Example 1:

// Input: [[1,1],[2,2],[3,3]]
// Output: 3
// Explanation:
// ^
// |
// |        o
// |     o
// |  o  
// +------------->
// 0  1  2  3  4
// Example 2:

// Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
// Explanation:
// ^
// |
// |  o
// |     o        o
// |        o
// |  o        o
// +------------------->
// 0  1  2  3  4  5  6
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

var maxPoints = function(points) {
    var np = points.length;

    if (np === 0) {
        return 0;   // No points, no line.
    }
    if (np === 1) {
        return 1;   // One point.
    }
    if (np === 2) {
        return 2;   // Two points. Both are on the single line.
    }

    var count = 0;
    for (var j = 0; j < np-1; j++) {
        var p1 = points[j];     // Keep track of THIS origin point.
        var slopes = {};        // Keep track of points by slope from THIS origin point.
        var duplicates = 0;     // The same origin point might be listed more than once.
        for (var k=j+1; k < np; k++) {  // Only need to check from this origin point on to the end.
            var p2 = points[k];         // Check each subsequent point in the array.
            // Calculate the slope. Infinity and NaN are OK keys into the slope object.
            var slope = (p2.y - p1.y) / (p2.x - p1.x);
            if (p2.x === p1.x) {
                if (p2.y === p1.y) {
                    ++duplicates;       // Same point as THIS origin point. Keep a count for later.
                    continue;
                } else {
                    slope = "Infinity"; // Really don't care if this is "Infinity" or "-Infinity".
                }
            }
            if (slopes[slope]) {
                ++slopes[slope];        // Already seen a point at this slope. Add this one in.
            } else {
                slopes[slope] = 2;      // No points seen for this slope yet. Start with origin and current points.
            }
        }
        // Starting with max == 1 accomodates duplicate points for both cases,
        // where we have only duplicates and where we have additional points.
        // If we have only duplicates, "1" will count the origin point and "duplicates" will be added to it.
        // If we have additional points, one of slopes[m] will have started at value "2" and will be greater than "1".
        // Then "duplicates" will be added to the max, without counting the origin point twice.
        var max = 1;
        for (var m in slopes) {
            if (max < slopes[m]) {
                max = slopes[m];
            }
        }
        // We've found the maximum number of points with a particular slope starting at THIS origin point.
        // Add in the number of points that are duplicates of the origin point.
        max += duplicates;

        if (count < max) {
            count = max;
        }
    }

    return count;
};