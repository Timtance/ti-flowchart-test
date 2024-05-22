export const copyToClipboard = function(text:any) {
    const w:any = window;
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