(function () {
  const selector = "ol.react-results--main li[data-layout='ad']";

  function removeAds(root = document) {
    root.querySelectorAll(selector).forEach((el) => el.remove());
  }

  removeAds();

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        if (node.matches?.(selector)) {
          node.remove();
          return;
        }

        removeAds(node);
      });
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
