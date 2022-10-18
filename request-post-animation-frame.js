((window) => {
  
  const queue = [];
  const {port1, port2} = new MessageChannel();
  const flush = port2.postMessage.bind(port2);

  port1.onmessage = () => {
    const tick = performance.now();
    while (queue.length) queue.shift()(tick);
  }

  window.requestPostAnimationFrame = function(callback) {
    queue.push(callback) === 1 && requestAnimationFrame(flush);
  }
  
})(this);
