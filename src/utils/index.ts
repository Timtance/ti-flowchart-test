export const copyToClipboard = function (text: any) {
  const w: any = window;
  if (w.clipboardData && w.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return w.clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

export const slowScroll = function(scrollKey:any, element:any, targetScrollValue:any, duration:any) {
  !scrollKey && (scrollKey = "scrollLeft");
  const start = element[scrollKey];
  const distance = targetScrollValue - start;
  const startTime = performance.now();

  function scroll(timestamp:any) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = easeInOutCubic(progress);
    element[scrollKey] = start + distance * easing;

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

// 缓动函数，可根据需要自定义
function easeInOutCubic(t:any) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}