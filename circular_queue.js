
var MyCircularQueue = function (k) {
    this.size = k
    this.queue = []


};


MyCircularQueue.prototype.enQueue = function (value) {
    if (this.size === this.queue.length) return false

    this.queue.push(value)
    return true


};


MyCircularQueue.prototype.deQueue = function () {
    const deQueue = this.queue.shift()
    if(deQueue || deQueue === 0 ) return true 
    return false


};


MyCircularQueue.prototype.Front = function () {
    if(this.queue[0] === 0 ) return 0
    return this.queue[0] || -1

};


MyCircularQueue.prototype.Rear = function () {
    if(this.queue[this.queue.length - 1] === 0) return 0

    return this.queue[this.queue.length - 1] || -1

};


MyCircularQueue.prototype.isEmpty = function () {
    if(!this.queue.length) return true

    return false

};


MyCircularQueue.prototype.isFull = function () {
    if(this.size === this.queue.length) return true

    return false

};
