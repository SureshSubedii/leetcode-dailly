// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

var findMinArrowShots = function(points) {
    points.sort((a,b) => {
       return a[0] ===  b[0] ? a[1] - b[1] :  a[0] - b[0] 

        })
    let start = points[0][1]
    let min = Infinity
    let arrows = 1

    for(let i = 1; i < points.length; i ++){
         min = Math.min(min, points[i][1] )
        if( (points[i][0] > start ) || (( points[i][0] <= start) && (points[i][0] > min)) ){
            arrows ++
            start = points[i][1]
            min = points[i][1]

        }
    }
    return arrows
    
};